export const DEFAULT_FONT = 'departure-mono';
export const READABLE_FONT = 'ibm-plex-mono';
export const FONT_STORAGE_KEY = 'font';

export const FONT_INIT_SCRIPT = `try{document.documentElement.dataset.font=localStorage.getItem('${FONT_STORAGE_KEY}')==='${READABLE_FONT}'?'${READABLE_FONT}':'${DEFAULT_FONT}'}catch{}`;
