import { motion, useReducedMotion } from 'motion/react';

interface Orb {
  size: number;
  color: string;
  top: string;
  left: string;
  drift: [number, number];
  dur: number;
}

const ORBS: Orb[] = [
  { size: 460, color: 'rgba(247,223,30,0.45)', top: '-8%', left: '-6%', drift: [60, 40], dur: 18 },
  { size: 380, color: 'rgba(240,190,37,0.40)', top: '35%', left: '60%', drift: [-50, 60], dur: 22 },
  { size: 300, color: 'rgba(228,161,38,0.38)', top: '65%', left: '10%', drift: [70, -40], dur: 20 },
  { size: 260, color: 'rgba(247,223,30,0.30)', top: '10%', left: '75%', drift: [-40, 50], dur: 24 },
];

/**
 * Elegant animated backdrop: slow-drifting blurred gradient orbs + a soft
 * rotating aurora sheen + a faint dotted grid. Purely decorative.
 */
export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 45%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 45%, #000 40%, transparent 100%)',
        }}
      />

      {/* Rotating aurora sheen */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(247,223,30,0.0), rgba(247,223,30,0.35), rgba(228,161,38,0.15), rgba(240,190,37,0.30), rgba(247,223,30,0.0))',
        }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Drifting orbs */}
      {ORBS.map((o, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            background: `radial-gradient(circle at 30% 30%, ${o.color}, transparent 70%)`,
          }}
          animate={
            reduce
              ? {}
              : {
                  x: [0, o.drift[0], 0],
                  y: [0, o.drift[1], 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
