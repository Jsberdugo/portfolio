import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from './Reveal';
import SectionHeading from './SectionHeading';

const PROJECTS = [
  { key: 'PRIVEX', img: 'privex.webp', url: 'https://privexstudiobhm.com/', span: 'md:col-span-6', ratio: 'md:aspect-[16/8]' },
  { key: 'PHOENIX', img: 'phoenix.png', url: 'https://phoenixcompany.us/', span: 'md:col-span-3' },
  { key: 'MORELLS', img: 'morells.png', url: 'https://morellsplumbing.com/', span: 'md:col-span-3' },
  { key: 'ERIK', img: 'erik.png', url: 'https://erikremodeling.com/', span: 'md:col-span-2' },
  { key: 'ELEGANT', img: 'elegant.png', url: 'https://elegantshowerdoors.us/', span: 'md:col-span-2' },
  { key: 'BLOWN', img: 'blown.png', url: 'https://blownawaysalonstudio.com/', span: 'md:col-span-2' },
];

export default function Proyectos() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title={t('PROJECTS.TITLE')} subtitle={t('PROJECTS.SUBTITLE')} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-6 md:gap-y-12"
        >
          {PROJECTS.map((p) => {
            const name = t(`PROJECTS.${p.key}.NAME`);
            return (
              <motion.a
                key={p.key}
                variants={staggerItem}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t('BUTTONS.VISIT')} ${name}`}
                className={`group block ${p.span}`}
              >
                <div className={`aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-200 ${p.ratio ?? ''}`}>
                  <img
                    src={`/img/${p.img}`}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-ink">{name}</h3>
                    <p className="mt-1 font-mono text-sm text-ink-light">{t(`PROJECTS.${p.key}.TECH`)}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-primary group-hover:text-ink">
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
