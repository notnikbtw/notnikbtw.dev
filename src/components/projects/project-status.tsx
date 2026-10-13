import type { ProjectStatus as Status } from '@/config/projects';

type ProjectStatusProps = {
  status: Status;
};

export function ProjectStatus({ status }: ProjectStatusProps) {
  return (
    <span
      aria-label={`Status: ${status}`}
      className={`inline-flex items-center gap-1 font-mono text-xs ${
        status === 'active'
          ? 'text-chart-2'
          : status === 'completed'
            ? 'text-chart-1'
            : 'text-muted-foreground/60'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 ${
          status === 'active'
            ? 'bg-chart-2'
            : status === 'completed'
              ? 'bg-chart-1'
              : 'bg-muted-foreground/40'
        }`}
        aria-hidden="true"
      />
      <span>{status}</span>
    </span>
  );
}
