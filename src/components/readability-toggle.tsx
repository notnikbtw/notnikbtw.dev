'use client';

import { useSyncExternalStore } from 'react';
import { DropdownMenu } from 'radix-ui';
import { DEFAULT_FONT, READABLE_FONT, FONT_STORAGE_KEY } from '@/config/fonts';

function subscribe(listener: () => void) {
  window.addEventListener('font-change', listener);
  return () => window.removeEventListener('font-change', listener);
}

function isReadable() {
  return document.documentElement.dataset.font === READABLE_FONT;
}

export function ReadabilityToggle() {
  const readable = useSyncExternalStore(subscribe, isReadable, () => false);

  function toggle(checked: boolean) {
    const font = checked ? READABLE_FONT : DEFAULT_FONT;
    document.documentElement.dataset.font = font;
    try {
      window.localStorage.setItem(FONT_STORAGE_KEY, font);
    } catch {
      // Switching still works when browser storage is blocked.
    }
    window.dispatchEvent(new Event('font-change'));
  }

  return (
    <DropdownMenu.CheckboxItem
      checked={readable}
      onCheckedChange={checked => toggle(checked === true)}
      onSelect={event => event.preventDefault()}
      className="focus:bg-accent focus:text-accent-foreground flex cursor-default items-center justify-between gap-3 p-2 font-(family-name:--font-ibm-plex-mono) text-xs outline-none select-none"
    >
      <span>Readable font</span>
      <span
        aria-hidden="true"
        data-state={readable ? 'checked' : 'unchecked'}
        className="border-border bg-muted data-[state=checked]:border-primary data-[state=checked]:bg-primary group inline-flex h-5 w-9 shrink-0 items-center border p-0.5"
      >
        <span className="bg-muted-foreground group-data-[state=checked]:bg-primary-foreground pointer-events-none block size-3.5 translate-x-0 group-data-[state=checked]:translate-x-4" />
      </span>
    </DropdownMenu.CheckboxItem>
  );
}
