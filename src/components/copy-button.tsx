'use client';

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CopyButtonProps = {
  value: string;
  className?: string;
  ariaLabel?: string;
};

export function CopyButton({
  value,
  className,
  ariaLabel = 'Copy to clipboard',
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : ariaLabel}
      title={copied ? 'Copied!' : 'Copy'}
      className={cn(
        'button-compact',
        copied &&
          'border-chart-2/60 bg-chart-2/10 text-chart-2 hover:border-chart-2/80 hover:bg-chart-2/15 hover:text-chart-2',
        className
      )}
    >
      {copied ? (
        <>
          <Check className="text-chart-2 h-3 w-3" aria-hidden="true" />
          <span>copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" aria-hidden="true" />
          <span>copy</span>
        </>
      )}
    </button>
  );
}
