import { Breadcrumb } from '@/components/breadcrumb';
import { TerminalTitle } from '@/components/terminal-title';

export function PrivacyHeader() {
  return (
    <header className="page-header">
      <Breadcrumb />

      <div className="flex flex-col gap-2.5">
        <TerminalTitle path="~/privacy" />

        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
          Privacy-first by default. This website does not collect any personal
          data, does not store tracking cookies, and uses only privacy-friendly
          analytics tools to monitor general traffic.
        </p>
      </div>
    </header>
  );
}
