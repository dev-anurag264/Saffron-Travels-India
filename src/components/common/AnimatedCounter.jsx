import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to target when it enters the viewport
 */
export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  // Parse target — handles strings like "12,000" or "98"
  const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));
  const prefix = String(target).match(/^[^0-9]*/)?.[0] ?? '';
  const detectedSuffix = suffix || (String(target).match(/[^0-9.]+$/)?.[0] ?? '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(numericTarget);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget, duration]);

  // Format with commas for Indian number system
  const formatted = count >= 1000
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{detectedSuffix}
    </span>
  );
}
