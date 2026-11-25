import hoursData from './hours.json';

const DAY_ORDER = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

const DAY_NAMES = {
  ca: {
    Mon: 'Dilluns',
    Tue: 'Dimarts',
    Wed: 'Dimecres',
    Thu: 'Dijous',
    Fri: 'Divendres',
    Sat: 'Dissabte',
    Sun: 'Diumenge',
    and: 'i',
    closedLabel: "Descans setmanal de l'obrador",
    closedShort: 'Tancat',
  },
  es: {
    Mon: 'Lunes',
    Tue: 'Martes',
    Wed: 'Miércoles',
    Thu: 'Jueves',
    Fri: 'Viernes',
    Sat: 'Sábado',
    Sun: 'Domingo',
    and: 'y',
    closedLabel: 'Descanso semanal del obrador',
    closedShort: 'Cerrado',
  },
};

function toMinutes(hhmm, isClose = false) {
  const [h, m] = hhmm.split(':').map(Number);
  if (isClose && h === 0 && m === 0) return 1440;
  return h * 60 + m;
}

/**
 * Checks whether the shop is currently open based on hours.json in Europe/Madrid time.
 */
export function isShopOpenNow(now = new Date()) {
  try {
    const options = { timeZone: hoursData.timezone || 'Europe/Madrid', hour12: false };
    const day = now.toLocaleDateString('en-US', { ...options, weekday: 'short' });
    const hour = parseInt(now.toLocaleTimeString('en-US', { ...options, hour: '2-digit' }), 10);
    const min = parseInt(now.toLocaleTimeString('en-US', { ...options, minute: '2-digit' }), 10);
    const currentMinutes = (hour === 24 ? 0 : hour) * 60 + min;

    const slots = hoursData.days?.[day] || [];
    return slots.some(({ open, close }) => {
      const openMin = toMinutes(open, false);
      const closeMin = toMinutes(close, true);
      if (closeMin >= openMin) {
        return currentMinutes >= openMin && currentMinutes < closeMin;
      }
      // Overnight slot (e.g. 17:30 - 01:00)
      return currentMinutes >= openMin || currentMinutes < closeMin;
    });
  } catch {
    return false;
  }
}

function formatSlots(slots, lang) {
  const labels = DAY_NAMES[lang] || DAY_NAMES.es;
  if (!slots || slots.length === 0) {
    return labels.closedLabel;
  }
  return slots.map(({ open, close }) => `${open} – ${close}`).join(' · ');
}

function formatDayGroup(days, lang) {
  const labels = DAY_NAMES[lang] || DAY_NAMES.es;
  if (days.length === 1) return labels[days[0]];
  if (days.length === 2) return `${labels[days[0]]} ${labels.and} ${labels[days[1]]}`;
  return `${labels[days[0]]} – ${labels[days[days.length - 1]]}`;
}

/**
 * Returns grouped schedule rows [{ days, hours }] for the given language.
 */
export function getFormattedSchedule(lang) {
  const groups = [];
  for (const dayKey of DAY_ORDER) {
    const slots = hoursData.days?.[dayKey] || [];
    const signature = JSON.stringify(slots);
    const prev = groups[groups.length - 1];
    if (prev && prev.signature === signature) {
      prev.dayKeys.push(dayKey);
    } else {
      groups.push({ dayKeys: [dayKey], slots, signature });
    }
  }

  return groups.map(({ dayKeys, slots }) => ({
    days: formatDayGroup(dayKeys, lang),
    hours: formatSlots(slots, lang),
  }));
}
