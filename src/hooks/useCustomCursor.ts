import { useEffect } from 'react';

/**
 * Smooth trailing custom cursor. Inverts (turns dark & larger) over
 * yellow sections, exactly like the original Angular implementation.
 */
export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && el.closest('.yellow-section')) {
        cursor.classList.add('invert');
      } else {
        cursor.classList.remove('invert');
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
