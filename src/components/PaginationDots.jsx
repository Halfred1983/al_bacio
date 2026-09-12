import React, { useState, useEffect } from 'react';

export default function PaginationDots({ t }) {
  const [activeSection, setActiveSection] = useState('inici');

  const sections = [
    { id: 'inici', label: t.nav.home },
    { id: 'historia', label: t.nav.story },
    { id: 'filosofia', label: t.nav.craft },
    { id: 'gelats', label: t.nav.flavors },
    { id: 'tomatina', label: t.nav.tomatina },
    { id: 'instagram', label: t.nav.instagram },
    { id: 'on-som', label: t.nav.visit },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-4">
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className="group flex items-center justify-end"
          aria-label={sec.label}
        >
          {/* Tooltip on hover */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-cacao-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mr-3 pointer-events-none shadow-sm whitespace-nowrap">
            {sec.label}
          </span>

          {/* Dot */}
          <span
            className={`transition-all duration-300 rounded-full ${
              activeSection === sec.id
                ? 'w-3.5 h-3.5 bg-terracotta-500 ring-4 ring-terracotta-500/30'
                : 'w-2 h-2 bg-cacao-400/50 hover:bg-terracotta-500'
            }`}
          />
        </a>
      ))}
    </div>
  );
}
