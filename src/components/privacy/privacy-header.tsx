import { Breadcrumb } from '@/components/breadcrumb';
import { TerminalTitle } from '@/components/terminal-title';

export function PrivacyHeader() {
  return (
    <header className="page-header">
      <Breadcrumb />

      <TerminalTitle path="~/privacy" />

      <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
        A few notes on privacy, saved settings, and using the code and content
        from this personal site.
      </p>
    </header>
  );
}
