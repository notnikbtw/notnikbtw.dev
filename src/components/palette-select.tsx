'use client';

import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePalette } from '@/components/providers/use-palette';
import { PALETTES, type PaletteId } from '@/config/palettes';

export function PaletteSelect() {
  const { palette, setPalette } = usePalette();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Choose color theme"
          title="Choose color theme"
          className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
        >
          <Palette className="size-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-40 font-mono">
        <DropdownMenuLabel className="text-muted-foreground text-[11px] tracking-wider uppercase">
          Color theme
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={palette}
          onValueChange={value => setPalette(value as PaletteId)}
        >
          {PALETTES.map(option => (
            <DropdownMenuRadioItem key={option.id} value={option.id}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
