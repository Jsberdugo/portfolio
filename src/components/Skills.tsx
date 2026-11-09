import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from './Reveal';
import SectionHeading from './SectionHeading';

const GROUPS: {
  key: 'FRONTEND' | 'BACKEND' | 'TOOLS';
  icon: string;
  span: string;
  items: string[];
}[] = [
  {
    key: 'FRONTEND',
    icon: 'fa-solid fa-code',
    span: 'md:col-span-6',
    items: ['React', 'AngularJS', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'WordPress', 'HTML', 'CSS'],
  },
  {
    key: 'BACKEND',
    icon: 'fa-solid fa-server',
    span: 'md:col-span-3',
    items: ['NestJS', 'Prisma', 'REST APIs'],
  },
  {
    key: 'TOOLS',
    icon: 'fa-solid fa-screwdriver-wrench',
    span: 'md:col-span-3',
    items: ['Git / GitHub', 'Third-party APIs', 'AI-assisted dev (Claude)'],
  },
];

const card = 'rounded-3xl border border-black/5 bg-white p-6 md:p-8';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title={t('SKILLS.TITLE')} subtitle={t('SKILLS.SUBTITLE')} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-6"
        >
          {GROUPS.map((g) => (
            <motion.div key={g.key} variants={staggerItem} className={`${card} ${g.span}`}>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-ink">
                  <i className={g.icon} />
                </span>
                <h3 className="text-xl font-bold text-ink">{t(`SKILLS.${g.key}`)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm font-medium text-ink">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div variants={staggerItem} className={`${card} md:col-span-3`}>
            <h3 className="mb-3 font-mono text-sm text-ink-light">{t('EDUCATION.TITLE')}</h3>
            <p className="text-xl font-bold text-ink">{t('EDUCATION.DEGREE')}</p>
            <p className="mt-1 text-ink-light">{t('EDUCATION.UNIVERSITY')}</p>
            <p className="mt-1 text-sm text-ink-light">{t('EDUCATION.LOCATION')}</p>
          </motion.div>

          <motion.div variants={staggerItem} className={`${card} md:col-span-3`}>
            <h3 className="mb-3 font-mono text-sm text-ink-light">{t('SKILLS.LANGUAGES')}</h3>
            <p className="text-xl font-bold text-ink">{t('SKILLS.LANG_ES')}</p>
            <p className="mt-1 text-xl font-bold text-ink">{t('SKILLS.LANG_EN')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
