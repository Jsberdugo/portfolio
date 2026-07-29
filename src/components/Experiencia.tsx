import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

const JOBS = [
  { key: 'TOPLEVEL', resp: 2, current: true },
  { key: 'WEBSIFFY', resp: 2 },
  { key: 'ERYS_CREATIVE', resp: 1 },
  { key: 'SERTECA', resp: 1 },
  { key: 'BEFASTER', resp: 2 },
];

function JobCard({
  jobKey,
  respCount,
  current,
}: {
  jobKey: string;
  respCount: number;
  current?: boolean;
}) {
  const { t } = useTranslation();
  const base = `EXPERIENCE.JOBS.${jobKey}`;

  return (
    <motion.div variants={staggerItem} className="relative pl-10 md:pl-14">
      {/* Timeline dot */}
      <span className="absolute left-[10px] top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-4">
        <span
          className={`h-4 w-4 rounded-full border-2 border-white shadow ${
            current ? 'animate-pulse bg-tertiary' : 'bg-secondary'
          }`}
        />
      </span>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group rounded-2xl border border-black/5 bg-white/90 p-5 shadow-card hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)] md:p-6"
      >
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-ink">{t(`${base}.TITLE`)}</h3>
          {current && (
            <span className="rounded-full bg-tertiary/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-tertiary">
              {t('EXPERIENCE.PRESENT')}
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
          <span className="font-semibold text-tertiary">
            {t(`${base}.COMPANY`)}
          </span>
          <span className="text-ink-light">· {t(`${base}.LOCATION`)}</span>
        </div>
        <p className="mt-0.5 font-mono text-xs text-ink-light">
          {t(`${base}.DATES`)}
        </p>

        <p className="mt-3 text-sm font-semibold text-ink">
          {t(`${base}.DESCRIPTION`)}
        </p>
        <ul className="mt-2 space-y-1.5">
          {Array.from({ length: respCount }).map((_, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-light">
              <i className="fa-solid fa-angle-right mt-1 text-xs text-secondary transition-transform group-hover:translate-x-1" />
              <span>{t(`${base}.RESPONSIBILITY${i + 1}`)}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experiencia() {
  const { t } = useTranslation();

  return (
    <section
      id="experiencia"
      className="yellow-section w-full bg-gradient-to-br from-primary via-secondary to-tertiary px-4 py-20 md:px-10"
    >
      <Reveal
        direction="zoom"
        className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-10"
      >
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <i className="fa-solid fa-briefcase text-2xl text-tertiary" />
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              {t('EXPERIENCE.TITLE')}
            </h2>
          </div>
          <p className="text-sm text-ink-light">{t('EXPERIENCE.SUBTITLE')}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative space-y-6"
        >
          {/* Timeline line */}
          <span className="absolute bottom-2 left-[10px] top-2 w-0.5 bg-gradient-to-b from-primary to-tertiary md:left-4" />
          {JOBS.map((j) => (
            <JobCard
              key={j.key}
              jobKey={j.key}
              respCount={j.resp}
              current={j.current}
            />
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
