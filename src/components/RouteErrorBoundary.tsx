import { Component, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 text-center text-[#10233f]">
        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold">This page could not load</h1>
          <p className="mt-4 text-slate-600">
            Please reload the page to get the latest version, or return to the home page.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              className="rounded-xl bg-[#10233f] px-6 py-3 text-white"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
            <a className="rounded-xl border border-slate-300 px-6 py-3" href="/">
              Go to home page
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default function RouteErrorBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
}
