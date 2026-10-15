import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/ui/link';
import { webringLinks } from '@/config/nix-webring';

export function NixWebring() {
  const links = webringLinks;

  return (
    <nav
      aria-label="Nix webring"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {links.map(link => (
        <Badge
          key={link.href}
          asChild
          interactive
          variant={link.highlight ? 'active' : 'default'}
          className="px-2.5 py-1"
        >
          <Link
            href={link.href}
            target="_self"
            className={link.highlight ? 'text-chart-2' : 'text-foreground'}
          >
            {link.label}
          </Link>
        </Badge>
      ))}
    </nav>
  );
}
