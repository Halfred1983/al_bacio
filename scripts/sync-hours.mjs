import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const HOURS_PATH = path.join(ROOT_DIR, 'src/data/hours.json');
const INDEX_HTML_PATH = path.join(ROOT_DIR, 'index.html');

const MAPS_URL =
  process.env.GOOGLE_MAPS_URL ||
  'https://www.google.com/maps/search/?api=1&query=Gelateria+Artigianale+Al+Bacio+Avenida+de+la+M%C3%BAsica+12+46360+Bu%C3%B1ol+Valencia+Spain&hl=en';

const DAY_MAP = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
  sunday: 'Sun',
};

const SCHEMA_DAY_MAP = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

const DAY_ORDER = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function to24Hour(hourStr, minStr, meridiem) {
  let h = parseInt(hourStr, 10);
  const m = minStr ? parseInt(minStr, 10) : 0;
  if (meridiem) {
    const upper = meridiem.toUpperCase();
    if (upper === 'PM' && h < 12) h += 12;
    if (upper === 'AM' && h === 12) h = 0;
  }
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Parses a single Google Maps time range like "5:30–9:00 PM", "9:00 AM – 1:30 PM", or "17:30–21:00".
 */
function parseTimeRange(rangeText) {
  const cleaned = rangeText.replace(/[\u202f\u00a0]/g, ' ').trim();
  const parts = cleaned.split(/\s*[–—-]\s*/);
  if (parts.length !== 2) return null;

  const timeRegex = /^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i;
  const startMatch = parts[0].trim().match(timeRegex);
  const endMatch = parts[1].trim().match(timeRegex);
  if (!startMatch || !endMatch) return null;

  const endMeridiem = endMatch[3] || null;
  // Google Maps omits AM/PM on start time when both share the same meridiem (e.g. "5:30–9:00 PM")
  const startMeridiem = startMatch[3] || endMeridiem;

  const open = to24Hour(startMatch[1], startMatch[2], startMeridiem);
  const close = to24Hour(endMatch[1], endMatch[2], endMeridiem);
  return { open, close };
}

/**
 * Parses a day's hours string (e.g. "Closed", "5:30–9:00 PM", "9:00 AM–1:30 PM, 5:00–8:00 PM").
 */
export function parseDayHours(rawText) {
  const text = rawText.replace(/[\u202f\u00a0]/g, ' ').trim();
  if (!text || /closed/i.test(text)) return [];
  if (/open 24 hours/i.test(text)) return [{ open: '00:00', close: '00:00' }];

  const segments = text.split(/\s*,\s*/);
  const slots = [];
  for (const seg of segments) {
    const parsed = parseTimeRange(seg);
    if (parsed) slots.push(parsed);
  }
  return slots;
}

async function scrapeGoogleMapsHours() {
  const { chromium } = require('playwright-core');

  const launchOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=en-US'],
  };

  if (process.env.CHROME_PATH) {
    launchOptions.executablePath = process.env.CHROME_PATH;
  }

  const browser = await chromium.launch(launchOptions);
  try {
    const context = await browser.newContext({
      locale: 'en-US',
      timezoneId: 'Europe/Madrid',
      userAgent:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();

    await page.goto(MAPS_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });

    // Handle Google consent screen if present
    const consentBtn = page
      .locator('button:has-text("Reject all"), button:has-text("Accept all"), form[action*="consent"] button')
      .first();
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await consentBtn.click();
      await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    }

    // If search results list appeared instead of direct place page, click the first result
    const firstResult = page.locator('a[href*="/maps/place/"]').first();
    if (await firstResult.isVisible({ timeout: 5000 }).catch(() => false)) {
      // Only click if we don't already see an hours button/table
      const hasHoursAlready = await page
        .locator('button[data-item-id="oh"], table.eK4R0e')
        .first()
        .isVisible({ timeout: 2000 })
        .catch(() => false);
      if (!hasHoursAlready) {
        await firstResult.click();
      }
    }

    // Wait for hours section and expand if collapsed
    const hoursButton = page.locator('button[data-item-id="oh"], [aria-label*="Hours" i][role="button"]').first();
    if (await hoursButton.isVisible({ timeout: 10000 }).catch(() => false)) {
      await hoursButton.click().catch(() => {});
    }

    await page.waitForSelector('table.eK4R0e tr, div[aria-label*="Monday" i] table tr', {
      state: 'attached',
      timeout: 15000,
    });

    const rows = await page.evaluate(() => {
      const table = document.querySelector('table.eK4R0e') || document.querySelector('div[aria-label*="Monday" i] table');
      if (!table) return [];
      return Array.from(table.querySelectorAll('tr')).map((tr) => {
        const cells = Array.from(tr.querySelectorAll('td, th')).map((el) => (el.textContent || '').trim());
        return cells;
      });
    });

    const days = {};
    for (const row of rows) {
      if (row.length < 2) continue;
      const dayKey = DAY_MAP[row[0].toLowerCase()];
      if (!dayKey) continue;
      days[dayKey] = parseDayHours(row[1]);
    }

    if (Object.keys(days).length !== 7) {
      throw new Error(`Expected 7 days from Google Maps, got ${Object.keys(days).length}: ${JSON.stringify(rows)}`);
    }

    return days;
  } finally {
    await browser.close();
  }
}

function buildOpeningHoursSpecification(days) {
  const specs = [];
  for (const dayKey of DAY_ORDER) {
    const slots = days[dayKey] || [];
    for (const { open, close } of slots) {
      specs.push({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SCHEMA_DAY_MAP[dayKey],
        opens: open,
        closes: close === '00:00' ? '23:59' : close,
      });
    }
  }
  return specs;
}

function updateIndexHtml(days) {
  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  const keyMatch = html.match(/"openingHoursSpecification"\s*:\s*\[/);
  if (!keyMatch || keyMatch.index === undefined) return false;

  const arrayStart = html.indexOf('[', keyMatch.index);
  let depth = 0;
  let arrayEnd = -1;
  for (let i = arrayStart; i < html.length; i++) {
    if (html[i] === '[') depth++;
    else if (html[i] === ']') {
      depth--;
      if (depth === 0) {
        arrayEnd = i;
        break;
      }
    }
  }
  if (arrayEnd === -1) return false;

  const specs = buildOpeningHoursSpecification(days);
  const formattedSpecs = JSON.stringify(specs, null, 2)
    .split('\n')
    .map((line, idx) => (idx === 0 ? line : `          ${line}`))
    .join('\n');

  const updated = `${html.slice(0, arrayStart)}${formattedSpecs}${html.slice(arrayEnd + 1)}`;

  if (updated !== html) {
    fs.writeFileSync(INDEX_HTML_PATH, updated, 'utf8');
    return true;
  }
  return false;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const scrapedDays = await scrapeGoogleMapsHours();

  // Order keys consistently Mon..Sun
  const orderedDays = {};
  for (const d of DAY_ORDER) {
    orderedDays[d] = scrapedDays[d] || [];
  }

  const current = JSON.parse(fs.readFileSync(HOURS_PATH, 'utf8'));
  const hasChanged = JSON.stringify(current.days) !== JSON.stringify(orderedDays);

  console.log('Scraped hours from Google Maps:', JSON.stringify(orderedDays, null, 2));

  if (!hasChanged) {
    console.log('No changes detected in opening hours.');
    return;
  }

  if (dryRun) {
    console.log('Dry run: changes detected, not writing files.');
    return;
  }

  const nextHours = {
    timezone: current.timezone || 'Europe/Madrid',
    lastUpdated: new Date().toISOString().slice(0, 10),
    source: 'Google Maps',
    days: orderedDays,
  };

  fs.writeFileSync(HOURS_PATH, `${JSON.stringify(nextHours, null, 2)}\n`, 'utf8');
  const htmlUpdated = updateIndexHtml(orderedDays);
  console.log(`Updated ${HOURS_PATH}${htmlUpdated ? ' and index.html' : ''}.`);
}

main().catch((err) => {
  console.error('Failed to sync opening hours:', err);
  process.exit(1);
});
