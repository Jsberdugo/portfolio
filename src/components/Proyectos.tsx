import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  { key: 'EVOLUTION', img: 'evolution.png', url: 'https://evolutionallservices.com/' },
  { key: 'PHOENIX', img: 'phoenix.png', url: 'https://phoenixcompany.us/' },
  { key: 'MORELLS', img: 'morells.png', url: 'https://morellsplumbing.com/' },
  { key: 'ERIK', img: 'erik.png', url: 'https://erikremodeling.com/' },
  { key: 'ELEGANT', img: 'elegant.png', url: 'https://elegantshowerdoors.us/' },
  { key: 'BLOWN', img: 'blown.png', url: 'https://blownawaysalonstudio.com/' },
];

function ProjectCard({
  index,
  img,
  url,
  name,
  tech,
}: {
  index: number;
  img: string;
  url: string;
  name: string;
  tech: string;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>('fade-up', (index % 3) * 100);
  return (
    <a
      ref={ref}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={`/img/${img}`}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-tertiary shadow">
          {tech}
        </span>
        <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-ink">
            <i className="fa-solid fa-arrow-up-right-from-square mr-1" />
            Visitar
          </span>
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-ink">{name}</h3>
        <p className="text-sm text-ink-light">{tech}</p>
      </div>
    </a>
  );
}

export default function Proyectos() {
  const { t } = useTranslation();
  return (
    <section id="proyectos" className="w-full bg-bg px-4 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <i className="fa-solid fa-laptop-code text-2xl text-tertiary" />
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              {t('PROJECTS.TITLE')}
            </h2>
          </div>
          <p className="text-sm text-ink-light">{t('PROJECTS.SUBTITLE')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.key}
              index={i}
              img={p.img}
              url={p.url}
              name={t(`PROJECTS.${p.key}.NAME`)}
              tech={t(`PROJECTS.${p.key}.TECH`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
