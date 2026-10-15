import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { TerminalTitle } from '@/components/terminal-title';
import { ABOUT_HEADER } from '@/config/about';

export function AboutHeader() {
  return (
    <header className="page-header">
      <Breadcrumb />

      <div className="flex flex-col gap-2.5">
        <TerminalTitle path="~/about" />

        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
          {ABOUT_HEADER}
        </p>
      </div>

      <div className="text-muted-foreground/80 flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        <Badge>
          role:
          <strong className="text-foreground font-medium">
            full-stack developer
          </strong>
        </Badge>
        <Badge>
          <span
            className="bg-chart-2 mr-1.5 inline-block h-1.5 w-1.5"
            aria-hidden="true"
          />
          status:
          <strong className="text-foreground font-medium">
            open for work & projects
          </strong>
        </Badge>
        <Badge>
          os: <strong className="text-foreground font-medium">nixos</strong>
        </Badge>
        <Badge>
          editor:
          <strong className="text-foreground font-medium">
            vscode / neovim
          </strong>
        </Badge>
      </div>
    </header>
  );
}
