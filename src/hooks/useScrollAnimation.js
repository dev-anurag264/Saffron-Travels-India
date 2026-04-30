import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns a ref and whether element is in viewport
 * Used for scroll-triggered animations without Framer Motion
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once in view, stop observing (animate once)
          if (!options.repeat) observer.unobserve(el);
        } else if (options.repeat) {
          setInView(false);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.repeat, options.threshold, options.rootMargin]);

  return { ref, inView };
}

/**
 * Hook that tracks window scroll position
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scrollY;
}
