import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const reduce = useReducedMotion();
  const lang = i18n.language?.startsWith('en') ? 'EN' : 'ES';
  const cvHref = `/cv/Juan_Berdugo_CV_${lang}.docx`;

  // Cursor-following gradient blob
  const [blob, setBlob] = useState({ x: 50, y: 40 });
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      if (e.clientY > window.innerHeight) return;
      setBlob({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      {/* Premium animated backdrop */}
      <AnimatedBackground />

      {/* Ambient gradient blob following the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${blob.x}% ${blob.y}%, rgba(247,223,30,0.22), transparent 45%)`,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 mx-auto flex max-w-4xl flex-col items-center rounded-[28px] border border-white/40 bg-gradient-to-r from-white/40 via-neutral-100/40 to-neutral-200/20 px-6 py-12 shadow-[0_8px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:px-16 md:px-24"
      >
        {/* Avatar with animated glow + gentle float */}
        <motion.div variants={item} className="relative mb-6">
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-primary/50 blur-2xl"
            animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src="/img/pfp-yellow.png"
            alt="Juan Simón Berdugo"
            className="h-44 w-44 rounded-full border-[3px] border-secondary bg-primary object-cover shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.04, rotate: 1 }}
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-sans text-4xl font-bold leading-tight text-ink md:text-5xl"
        >
          {t('HERO.TITLE').split('Juan')[0]}
          <span className="text-gradient">Juan Simón</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl font-mono text-lg leading-relaxed text-ink"
        >
          <strong className="font-mono-bold text-tertiary">
            {t('HERO.SPAN')}{' '}
          </strong>
          {t('HERO.SUBTITLE2')}
        </motion.p>

        {/* Tech badges */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {['HERO.BADGE1', 'HERO.BADGE2', 'HERO.BADGE3', 'HERO.BADGE4'].map(
            (b) => (
              <motion.span
                key={b}
                whileHover={{ y: -3, scale: 1.06 }}
                className="cursor-default rounded-full border border-tertiary/40 bg-white/70 px-3 py-1 text-xs font-semibold text-tertiary shadow-sm"
              >
                {t(b)}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="yellow-section mt-8 flex flex-wrap items-center justify-center gap-4 font-sans"
        >
          <motion.a
            href="#contacto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden rounded-full bg-secondary px-6 py-2 font-semibold text-ink"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fa-solid fa-envelope mr-2" />
            {t('BUTTONS.CONTACT_ME')}
          </motion.a>
          <motion.a
            href={cvHref}
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden rounded-full border border-ink px-6 py-2 font-semibold text-ink transition-colors hover:border-transparent"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fa-solid fa-file-arrow-down mr-2" />
            {t('BUTTONS.DOWNLOAD_CV')}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/juan-simon-berdugo-molero/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden rounded-full border border-ink px-6 py-2 font-semibold text-ink transition-colors hover:border-transparent"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fab fa-linkedin mr-2" />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#experiencia"
          variants={item}
          className="mt-10 flex flex-col items-center gap-1 text-xs font-medium text-ink-light"
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <i className="fa-solid fa-chevron-down text-tertiary" />
        </motion.a>
      </motion.div>
    </section>
  );
}
