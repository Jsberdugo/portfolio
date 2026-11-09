import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'motion/react';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 17 } },
};

const BADGES = ['HERO.BADGE1', 'HERO.BADGE2', 'HERO.BADGE3', 'HERO.BADGE4'];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'EN' : 'ES';
  const cvHref = `/cv/Juan_Berdugo_CV_${lang}.docx`;
  const greeting = t('HERO.TITLE').split('Juan')[0].trim();

  return (
    <section id="inicio" className="px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14"
      >
        <div className="order-2 lg:order-1">
          <motion.p variants={item} className="font-mono text-sm text-ink-light md:text-base">
            {t('HERO.SPAN')}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-[clamp(3rem,10vw,6.25rem)] font-bold leading-[1.12] tracking-tight text-ink"
          >
            {greeting}
            <br />
            <span className="box-decoration-clone bg-primary px-2">Juan Simón</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-light">
            {t('HERO.SUBTITLE2')}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#proyectos"
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              {t('BUTTONS.VIEW_PROJECTS')}
              <i className="fa-solid fa-arrow-down text-sm text-primary" />
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              {t('BUTTONS.CONTACT_ME')}
            </a>
            <div className="flex gap-3">
              <a
                href={cvHref}
                download
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-bold text-ink transition-colors hover:border-ink"
              >
                <i className="fa-solid fa-file-arrow-down" />
                {t('BUTTONS.DOWNLOAD_CV')}
              </a>
              <a
                href="https://www.linkedin.com/in/juan-simon-berdugo-molero/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-ink/20 text-lg text-ink transition-colors hover:border-ink"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-sm lg:order-2 lg:max-w-none">
          <div className="aspect-square overflow-hidden rounded-[32px] bg-primary lg:aspect-[4/5]">
            <img
              src="/img/pfp-yellow.png"
              alt="Juan Simón Berdugo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex w-max max-w-[calc(100vw-2.5rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 rounded-2xl bg-ink p-2">
            {BADGES.map((b) => (
              <span key={b} className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs text-white">
                {t(b)}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
