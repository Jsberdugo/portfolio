import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GROUPS: {
  key: 'FRONTEND' | 'BACKEND' | 'TOOLS';
  icon: string;
  items: string[];
}[] = [
  {
    key: 'FRONTEND',
    icon: 'fa-solid fa-code',
    items: [
      'React',
      'AngularJS',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Vite',
      'WordPress',
      'HTML',
      'CSS',
    ],
  },
  {
    key: 'BACKEND',
    icon: 'fa-solid fa-server',
    items: ['NestJS', 'Prisma', 'REST APIs'],
  },
  {
    key: 'TOOLS',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      'Git / GitHub',
      'WhatsApp Business API',
      'respond.io',
      'AI-assisted dev (Claude)',
    ],
  },
];

function SkillCard({
  index,
  icon,
  title,
  items,
}: {
  index: number;
  icon: string;
  title: string;
  items: string[];
}) {
  const ref = useScrollReveal<HTMLDivElement>('fade-up', index * 100);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-tertiary text-ink shadow">
          <i className={icon} />
        </span>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-tertiary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-ink transition-colors hover:bg-primary/25"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const eduRef = useScrollReveal<HTMLDivElement>('zoom-in', 100);

  return (
    <section id="skills" className="w-full px-4 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <i className="fa-solid fa-layer-group text-2xl text-tertiary" />
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              {t('SKILLS.TITLE')}
            </h2>
          </div>
          <p className="text-sm text-ink-light">{t('SKILLS.SUBTITLE')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <SkillCard
              key={g.key}
              index={i}
              icon={g.icon}
              title={t(`SKILLS.${g.key}`)}
              items={g.items}
            />
          ))}
        </div>

        {/* Education + languages */}
        <div
          ref={eduRef}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-card">
            <div className="mb-3 flex items-center gap-3">
              <i className="fa-solid fa-graduation-cap text-xl text-tertiary" />
              <h3 className="text-lg font-bold text-ink">
                {t('EDUCATION.TITLE')}
              </h3>
            </div>
            <p className="font-semibold text-ink">
              {t('EDUCATION.DEGREE')}
            </p>
            <p className="text-sm text-ink-light">
              {t('EDUCATION.UNIVERSITY')}
            </p>
            <p className="mt-0.5 font-mono text-xs text-ink-light">
              {t('EDUCATION.LOCATION')}
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-card">
            <div className="mb-3 flex items-center gap-3">
              <i className="fa-solid fa-language text-xl text-tertiary" />
              <h3 className="text-lg font-bold text-ink">
                {t('SKILLS.LANGUAGES')}
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-ink">
                <i className="fa-solid fa-circle-check text-secondary" />
                {t('SKILLS.LANG_ES')}
              </li>
              <li className="flex items-center gap-2 text-ink">
                <i className="fa-solid fa-circle-check text-secondary" />
                {t('SKILLS.LANG_EN')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
