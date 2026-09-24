/* ============================================================
   HAMTARO — icons.js
   Conjunto próprio de ícones em SVG (linha, 24x24, stroke atual).
   Nenhuma biblioteca externa: leve, sem licenciamento e fácil
   de recolorir via CSS (usa currentColor).
   ============================================================ */

export const ICON_PATHS = {
  checklist: `<rect x="5" y="3" width="14" height="18" rx="2.2"/><path d="M9 3.5V5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3.5"/><path d="m8.5 12.5 2 2 4.5-4.5"/><path d="M8.5 16.5h7"/>`,
  oil: `<path d="M12 3c2.2 2.7 5 6.2 5 9.5a5 5 0 0 1-10 0C7 9.2 9.8 5.7 12 3Z"/><path d="M9.6 13.8c0 1.2 1 2 2.4 2"/>`,
  brake: `<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="2.6"/><path d="M12 6.4v2.3M17.6 12h-2.3M12 17.6v-2.3M6.4 12h2.3"/>`,
  suspension: `<path d="M8 3v4.2M16 3v4.2"/><path d="M8 7.2c0 1.6 2 1.6 2 3.2s-2 1.6-2 3.2 2 1.6 2 3.2"/><path d="M16 7.2c0 1.6-2 1.6-2 3.2s2 1.6 2 3.2-2 1.6-2 3.2"/><path d="M8 17v3.6M16 17v3.6"/>`,
  engine: `<rect x="4.5" y="9" width="10" height="8" rx="1.4"/><path d="M14.5 11h2.3l2.7 2v2l-2.7 2h-2.3"/><path d="M7 9V6.6a1 1 0 0 1 1-1h2.4a1 1 0 0 1 1 1V9"/><path d="M7.5 17v2M11.5 17v2"/>`,
  coolant: `<path d="M12 2.5v13.6"/><circle cx="12" cy="18.6" r="2.9"/><path d="M8.4 6.4h7.2M8.4 9.6h7.2M8.4 12.8h7.2"/>`,
  scanner: `<rect x="4" y="5.5" width="13" height="9" rx="1.6"/><path d="M7 9h7M7 11.6h4.4"/><path d="M17 8.4l3-1.6v10.4l-3-1.6"/><path d="M8.5 14.5v2.3M11.5 14.5v3.6"/>`,
  electrical: `<path d="M13 2.5 5.5 13.2h5L10 21.5l8-11.3h-5l0-7.7Z"/>`,
  injection: `<path d="M4 11.5h8.5"/><path d="M12.5 8.5h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3"/><path d="M17.5 10.2 20.5 9v5l-3-1.2"/><path d="M4 8.8v5.4"/>`,
  wrench: `<path d="M14.7 3.3a4.5 4.5 0 0 0-5.7 5.5L3.5 14.3a1.8 1.8 0 0 0 2.5 2.5l5.5-5.5a4.5 4.5 0 0 0 5.5-5.7l-2.9 2.9-2.1-2.1 2.7-2.6Z"/>`,
  shield: `<path d="M12 2.8 19 5.5v5.4c0 4.6-3 7.7-7 9.3-4-1.6-7-4.7-7-9.3V5.5l7-2.7Z"/><path d="m9 12 2 2 4-4.4"/>`,
  lift: `<path d="M12 2.5v13"/><path d="m8.5 6 3.5-3.5L15.5 6"/><rect x="4.5" y="15.5" width="15" height="6" rx="1.4"/><circle cx="8" cy="21.5" r="0.4"/><circle cx="16" cy="21.5" r="0.4"/>`,
  chat: `<path d="M4 5.5h16v10H9.5L5.5 19v-3.5H4v-10Z"/><path d="M8 9.5h8M8 12.3h5"/>`,
  coffee: `<path d="M5 8.5h11v5.8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8.5Z"/><path d="M16 10h1.6a2.3 2.3 0 0 1 0 4.6H16"/><path d="M8 3.3c-.9.8-.9 1.6 0 2.4M11.5 3.3c-.9.8-.9 1.6 0 2.4"/>`,
  card: `<rect x="3" y="6" width="18" height="12.5" rx="2"/><path d="M3 10h18"/><path d="M6.5 14.5h4"/>`,
  whatsapp: `<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"/><path d="M8.7 8.4c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5-.1.2-.3.3-.1.6.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.3.1.2.1 1-.3 1.7-.4.7-1.9 1.4-2.6 1.4-.7 0-1.5 0-4.2-1.6-3.3-1.9-4.7-4.9-4.8-5.1-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.9Z" fill="currentColor" stroke="none"/>`,
  mail: `<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/>`,
  pin: `<path d="M12 21.5s7-6.3 7-11.8a7 7 0 1 0-14 0c0 5.5 7 11.8 7 11.8Z"/><circle cx="12" cy="9.6" r="2.4"/>`,
  phone: `<path d="M6.6 3.5 9.7 6.6l-1.9 2.8a13 13 0 0 0 6.8 6.8l2.8-1.9 3.1 3.1-1.3 2.3a2.4 2.4 0 0 1-2.5 1.1C11.9 19.7 4.3 12.1 3.5 6.3a2.4 2.4 0 0 1 1.1-2.5l2-1.3Z"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.3V12l3.4 2"/>`,
  arrowRight: `<path d="M4.5 12h14.2"/><path d="m13 6 6 6-6 6"/>`,
  check: `<path d="m4.5 12.5 5 5L19.5 6.5"/>`,
  star: `<path d="M12 3.2 14.6 9l6.3.5-4.8 4.2 1.5 6.1L12 16.6 6.4 19.8l1.5-6.1L3.1 9.5 9.4 9 12 3.2Z"/>`,
  close: `<path d="m5.5 5.5 13 13M18.5 5.5l-13 13"/>`,
  menu: `<path d="M4 6.5h16M4 12h16M4 17.5h16"/>`,
  instagram: `<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.9"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none"/>`,
  facebook: `<circle cx="12" cy="12" r="8.6"/><path d="M13.8 8.4h1.6V5.8h-1.8c-1.9 0-3 1.1-3 3v1.7H8.9v2.6h1.7v6.4h2.7v-6.4h1.9l.3-2.6h-2.2V9.1c0-.5.2-.7.5-.7Z" fill="currentColor" stroke="none"/>`,
  camera: `<path d="M4 8h3.2L8.6 5.8h6.8L16.8 8H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.4"/>`,
  quote: `<path d="M7 8.5c-2 .7-3 2.2-3 4.3 0 1.7 1.1 2.9 2.6 2.9 1.4 0 2.4-1 2.4-2.4 0-1.3-.9-2.2-2.1-2.2h-.4c.1-1 .8-1.8 2-2.2L7 8.5Z" fill="currentColor" stroke="none"/><path d="M15.7 8.5c-2 .7-3 2.2-3 4.3 0 1.7 1.1 2.9 2.6 2.9 1.4 0 2.4-1 2.4-2.4 0-1.3-.9-2.2-2.1-2.2h-.4c.1-1 .8-1.8 2-2.2l-1.5-.4Z" fill="currentColor" stroke="none"/>`,
  chevronDown: `<path d="m5.5 8.5 6.5 6.5 6.5-6.5"/>`,
  car: `<path d="M4 15.5v-3l1.8-4.3A2 2 0 0 1 7.7 7h8.6a2 2 0 0 1 1.9 1.2L20 12.5v3"/><path d="M4 15.5h16v2.3a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-1H7.2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.3Z"/><circle cx="7.6" cy="15.5" r="1.4"/><circle cx="16.4" cy="15.5" r="1.4"/>`,
  gauge: `<path d="M4.5 15.5a7.5 7.5 0 1 1 15 0"/><path d="M12 15.5 15.3 10"/><circle cx="12" cy="15.5" r="1.1" fill="currentColor" stroke="none"/>`,
  route: `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 8v3a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3v1"/>`,
  building: `<rect x="5" y="3.5" width="10" height="17" rx="1"/><rect x="15" y="9" width="4.5" height="11.5" rx="1"/><path d="M8 7h1.4M11.6 7H13M8 10.4h1.4M11.6 10.4H13M8 13.8h1.4M11.6 13.8H13M17 12.5h.6M17 15.8h.6"/>`,
};

export function icon(name, className = "") {
  const inner = ICON_PATHS[name] || "";
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}
