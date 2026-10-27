import { type ReactNode } from 'react';

// Show route content immediately; avoid simulated loading delays.
export const PageTransition = ({ children }: { children: ReactNode }) => <>{children}</>;
