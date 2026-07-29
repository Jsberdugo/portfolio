import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

const PROJECTS = [
  { key: 'EVOLUTION', img: 'evolution.png', url: 'https://evolutionallservices.com/' },
  { key: 'PHOENIX', img: 'phoenix.png', url: 'https://phoenixcompany.us/' },
  { key: 'MORELLS', img: 'morells.png', url: 'https://morellsplumbing.com/' },
  { key: 'ERIK', img: 'erik.png', url: 'https://erikremodeling.com/' },
  { key: 'ELEGANT', img: 'elegant.png', url: 'https://elegantshowerdoors.us/' },
  { key: 'BLOWN', img: 'blown.png', url: 'https://blownawaysalonstudio.com/' },
];

function ProjectCard({
  img,
  url,
  name,
  tech,
}: {
  img: string;
  url: string;
  name: string;
  tech: string;
}) {
  return (
    <motion.a
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-[0_18px_38px_rgba(0,0,0,0.2)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={`/img/${img}`}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-tertiary shadow">
          {tech}
        </span>
        <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="translate-y-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-ink transition-transform duration-300 group-hover:translate-y-0">
            <i className="fa-solid fa-arrow-up-right-from-square mr-1" />
            Visitar
          </span>
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-ink">{name}</h3>
        <p className="text-sm text-ink-light">{tech}</p>
      </div>
    </motion.a>
  );
}

export default function Proyectos() {
  const { t } = useTranslation();
  return (
    <section id="proyectos" className="w-full bg-bg px-4 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <i className="fa-solid fa-laptop-code text-2xl text-tertiary" />
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              {t('PROJECTS.TITLE')}
            </h2>
          </div>
          <p className="text-sm text-ink-light">{t('PROJECTS.SUBTITLE')}</p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.key}
              img={p.img}
              url={p.url}
              name={t(`PROJECTS.${p.key}.NAME`)}
              tech={t(`PROJECTS.${p.key}.TECH`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
