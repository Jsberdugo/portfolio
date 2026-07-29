import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom';

const OFFSET: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 46 },
  down: { y: -46 },
  left: { x: -46 },
  right: { x: 46 },
  zoom: { scale: 0.92 },
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

/** Scroll-triggered reveal with a smooth spring, respects reduced motion. */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const off = OFFSET[direction];

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, x: off.x ?? 0, y: off.y ?? 0, scale: off.scale ?? 1, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 17, delay },
    },
  };

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Stagger container: children with `variants={staggerItem}` animate in sequence. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 85, damping: 16 },
  },
};
