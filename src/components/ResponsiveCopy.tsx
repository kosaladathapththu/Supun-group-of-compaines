import { type ReactNode } from 'react';

export const ResponsiveCopy = ({ summary, children }: { summary: string; children: ReactNode }) => (
  <div>
    <div className="hidden md:block">{children}</div>
    <div className="md:hidden">
      <p>{summary}</p>
      <details className="mt-3">
        <summary className="cursor-pointer text-sm font-semibold text-primary">Read more</summary>
        <div className="mt-3 space-y-3">{children}</div>
      </details>
    </div>
  </div>
);
