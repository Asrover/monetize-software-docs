import type { ReactElement } from 'react';

type BadgeVariant = 'new' | 'legacy';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  new: 'bg-green-500/15 text-green-700 dark:text-green-400 ring-green-500/30',
  legacy: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 ring-amber-500/30'
};

export function withBadge(title: string, variant: BadgeVariant): ReactElement {
  return (
    <span className="inline-flex items-center gap-2">
      <span>{title}</span>
      <span
        className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ring-1 ring-inset ${VARIANT_CLASSES[variant]}`}
      >
        {variant}
      </span>
    </span>
  );
}
