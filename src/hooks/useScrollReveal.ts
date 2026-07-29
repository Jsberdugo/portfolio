import { useEffect, useRef } from 'react';

type RevealType =
  | 'fade-up'
  | 'long-fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in';

/**
 * Adds a reveal animation when the element scrolls into view.
 * Mirrors the old Angular `appAnimateOnScroll` directive (IntersectionObserver).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  type: RevealType = 'fade-up',
  delay = 0
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.classList.add('reveal', type);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          window.setTimeout(() => node.classList.add('is-visible'), delay);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [type, delay]);

  return ref;
}
