import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let targetId = hash.slice(1);
      try {
        targetId = decodeURIComponent(targetId);
      } catch {
        /* Keep malformed fragments harmless. */
      }
      let frame = 0;
      const observer = new MutationObserver(() => scrollToTarget());
      const scrollToTarget = () => {
        const target = document.getElementById(targetId);
        if (!target) return false;
        observer.disconnect();
        frame = window.requestAnimationFrame(() =>
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'auto'
              : 'smooth',
            block: 'start',
          }),
        );
        return true;
      };
      if (!scrollToTarget()) observer.observe(document.body, { childList: true, subtree: true });
      const timeout = window.setTimeout(() => observer.disconnect(), 8000);
      return () => {
        observer.disconnect();
        window.clearTimeout(timeout);
        window.cancelAnimationFrame(frame);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
