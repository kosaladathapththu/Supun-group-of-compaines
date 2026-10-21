import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start transition
    setIsLoaded(false);
    setIsTransitioning(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Complete transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content || location.pathname === '/') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const targets = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('page-section-visible');
          } else if (
            entry.boundingClientRect.top >= window.innerHeight ||
            entry.boundingClientRect.bottom <= 0
          ) {
            entry.target.classList.remove('page-section-visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -24px 0px' },
    );

    // Reveal content-sized blocks rather than hiding an entire long directory.
    // Existing AnimatedSection wrappers keep their own animation.
    const collect = (element: HTMLElement, depth = 0) => {
      if (element.closest('[data-scroll-animated]') || targets.has(element)) return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const children = Array.from(element.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && !['SCRIPT', 'STYLE'].includes(child.tagName),
      );
      const containsAnimation = element.querySelector('[data-scroll-animated]');
      if (
        (containsAnimation || rect.height > window.innerHeight * 0.85) &&
        children.length &&
        depth < 6
      ) {
        children.forEach((child) => collect(child, depth + 1));
        return;
      }
      if (containsAnimation) return;
      targets.add(element);
      element.classList.add('page-section-reveal');
      // Content already on screen stays visible when a route first loads.
      if (rect.top < window.innerHeight && rect.bottom > 0)
        element.classList.add('page-section-visible');
      observer.observe(element);
    };
    const scan = () =>
      content.querySelectorAll<HTMLElement>('main section').forEach((section) => {
        if (!section.closest('.page-section-reveal')) collect(section);
      });
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(content, { childList: true, subtree: true });
    const showFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      event.target.closest('.page-section-reveal')?.classList.add('page-section-visible');
    };
    const showAll = () => {
      if (reducedMotion.matches)
        targets.forEach((target) => target.classList.add('page-section-visible'));
    };
    content.addEventListener('focusin', showFocused);
    reducedMotion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      content.removeEventListener('focusin', showFocused);
      reducedMotion.removeEventListener('change', showAll);
      targets.forEach((target) =>
        target.classList.remove('page-section-reveal', 'page-section-visible'),
      );
    };
  }, [location.pathname]);

  return (
    <>
      {/* Loading overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Loader2 className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top progress bar */}
      {isTransitioning && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-progress-bar">
          <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Page content */}
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
};
