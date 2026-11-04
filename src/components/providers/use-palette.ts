'use client';

import * as React from 'react';
import {
  DEFAULT_PALETTE,
  PALETTE_STORAGE_KEY,
  isPaletteId,
  type PaletteId,
} from '@/config/palettes';

const listeners = new Set<() => void>();
let memoryPalette: PaletteId | null = null;

function readPalette(): PaletteId {
  if (memoryPalette) return memoryPalette;

  try {
    const stored = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    return isPaletteId(stored) ? stored : DEFAULT_PALETTE;
  } catch {
    return DEFAULT_PALETTE;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

export function usePalette() {
  const palette = React.useSyncExternalStore(
    subscribe,
    readPalette,
    () => DEFAULT_PALETTE
  );

  const setPalette = React.useCallback((next: PaletteId) => {
    memoryPalette = next;

    try {
      window.localStorage.setItem(PALETTE_STORAGE_KEY, next);
    } catch {
      // Storage is blocked
    }

    document.documentElement.dataset.palette = next;
    listeners.forEach(listener => listener());
  }, []);

  return { palette, setPalette };
}
