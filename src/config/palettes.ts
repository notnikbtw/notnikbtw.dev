export const PALETTES = [
  { id: 'kanagawa', label: 'Kanagawa' },
  { id: 'gruvbox', label: 'Gruvbox' },
  { id: 'catppuccin', label: 'Catppuccin' },
  { id: 'everforest', label: 'Everforest' },
  { id: 'rose-pine', label: 'Rosé Pine' },
] as const;

export type PaletteId = (typeof PALETTES)[number]['id'];

export const DEFAULT_PALETTE: PaletteId = 'kanagawa';

export const PALETTE_STORAGE_KEY = 'palette';

export function isPaletteId(value: unknown): value is PaletteId {
  return PALETTES.some(palette => palette.id === value);
}

export const PALETTE_INIT_SCRIPT = `try{document.documentElement.dataset.palette=localStorage.getItem('${PALETTE_STORAGE_KEY}')||'${DEFAULT_PALETTE}'}catch(e){}`;
