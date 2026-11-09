import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from './Reveal';
import SectionHeading from './SectionHeading';

const POINTS = [
  { key: 'FAST', icon: 'fa-solid fa-bolt' },
  { key: 'BEAUTIFUL', icon: 'fa-solid fa-wand-magic-sparkles' },
  { key: 'MOBILE', icon: 'fa-solid fa-mobile-screen' },
  { key: 'SEO', icon: 'fa-solid fa-magnifying-glass' },
  { key: 'FULLSTACK', icon: 'fa-solid fa-layer-group' },
  { key: 'COMMUNICATION', icon: 'fa-solid fa-comments' },
];

export default function Ventajas() {
  const { t } = useTranslation();

  return (
    <section id="ventajas" className="px-2 py-8 md:px-4">
      <div className="mx-auto max-w-[1400px] rounded-[32px] bg-primary px-5 py-14 md:rounded-[48px] md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="02" title={t('BENEFITS.TITLE')} subtitle={t('BENEFITS.SUBTITLE')} onYellow />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {POINTS.map((p) => (
              <motion.article key={p.key} variants={staggerItem} className="border-t border-ink/25 py-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lg text-primary">
                  <i className={p.icon} />
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-ink">
                  {t(`BENEFITS.${p.key}.TITLE`)}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/75">{t(`BENEFITS.${p.key}.TEXT`)}</p>
              </motion.article>
            ))}
          </motion.div>

          <a
            href="#contacto"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t('BENEFITS.CTA')}
            <i className="fa-solid fa-arrow-right text-sm text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
