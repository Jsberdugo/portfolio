import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from './Reveal';
import SectionHeading from './SectionHeading';

const JOBS = [
  { key: 'TOPLEVEL', resp: 2, current: true },
  { key: 'WEBSIFFY', resp: 2 },
  { key: 'ERYS_CREATIVE', resp: 1 },
  { key: 'SERTECA', resp: 1 },
  { key: 'BEFASTER', resp: 2 },
];

export default function Experiencia() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="px-2 py-8 md:px-4">
      <div className="mx-auto max-w-[1400px] rounded-[32px] bg-ink px-5 py-14 md:rounded-[48px] md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading dark index="03" title={t('EXPERIENCE.TITLE')} subtitle={t('EXPERIENCE.SUBTITLE')} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {JOBS.map((j) => {
              const base = `EXPERIENCE.JOBS.${j.key}`;
              return (
                <motion.article
                  key={j.key}
                  variants={staggerItem}
                  className="grid gap-3 border-t border-white/15 py-8 md:grid-cols-[220px_1fr] md:gap-10"
                >
                  <div>
                    <p className="font-mono text-sm text-primary">{t(`${base}.DATES`)}</p>
                    <p className="mt-1 text-sm text-white/55">{t(`${base}.LOCATION`)}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">{t(`${base}.TITLE`)}</h3>
                      {j.current && (
                        <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-ink">
                          {t('EXPERIENCE.PRESENT')}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-bold text-secondary">{t(`${base}.COMPANY`)}</p>
                    <p className="mt-4 text-white/85">{t(`${base}.DESCRIPTION`)}</p>
                    <ul className="mt-3 space-y-2">
                      {Array.from({ length: j.resp }).map((_, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/60 md:text-base">
                          <span className="mt-2.5 h-1 w-3 shrink-0 bg-primary" />
                          <span>{t(`${base}.RESPONSIBILITY${i + 1}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
