import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BUBBLES = [
  { size: 60, left: '10%', bg: 'var(--color-primary)', dur: '9s', delay: '0s' },
  { size: 100, left: '30%', bg: 'var(--color-secondary)', dur: '13s', delay: '1s' },
  { size: 50, left: '50%', bg: 'var(--color-tertiary)', dur: '11s', delay: '2s' },
  { size: 80, left: '70%', bg: 'var(--color-primary)', dur: '10s', delay: '.5s' },
  { size: 35, left: '85%', bg: 'var(--color-secondary)', dur: '12s', delay: '1.5s' },
  { size: 120, left: '15%', bg: 'var(--color-tertiary)', dur: '14s', delay: '1s' },
  { size: 150, left: '40%', bg: 'var(--color-primary)', dur: '16s', delay: '2.5s' },
  { size: 180, left: '60%', bg: 'var(--color-secondary)', dur: '18s', delay: '1.5s' },
  { size: 100, left: '75%', bg: 'var(--color-primary)', dur: '12s', delay: '3s' },
  { size: 200, left: '2%', bg: 'var(--color-tertiary)', dur: '20s', delay: '2s' },
  { size: 160, left: '90%', bg: 'var(--color-primary)', dur: '15s', delay: '0s' },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>('long-fade-up', 10);
  const lang = i18n.language?.startsWith('en') ? 'EN' : 'ES';
  const cvHref = `/cv/Juan_Berdugo_CV_${lang}.docx`;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <div
        ref={ref}
        className="z-10 mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-white/40 bg-gradient-to-r from-white/40 via-neutral-100/40 to-neutral-200/20 px-6 py-12 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:px-16 md:px-24"
      >
        <div className="relative mb-6">
          <span className="absolute inset-0 -z-10 animate-[floaty_6s_ease-in-out_infinite] rounded-full bg-primary/40 blur-2xl" />
          <img
            src="/img/pfp-yellow.png"
            alt="Juan Simón Berdugo"
            className="h-44 w-44 rounded-full border-[3px] border-secondary bg-primary object-cover shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
          />
        </div>

        <h1 className="font-sans text-4xl font-bold leading-tight text-ink md:text-5xl">
          {t('HERO.TITLE').split('Juan')[0]}
          <span className="text-gradient">Juan Simón</span>
        </h1>

        <p className="mt-4 max-w-2xl font-mono text-lg leading-relaxed text-ink">
          <strong className="font-mono-bold text-tertiary">
            {t('HERO.SPAN')}{' '}
          </strong>
          {t('HERO.SUBTITLE2')}
        </p>

        {/* Tech badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {['HERO.BADGE1', 'HERO.BADGE2', 'HERO.BADGE3', 'HERO.BADGE4'].map(
            (b) => (
              <span
                key={b}
                className="rounded-full border border-tertiary/40 bg-white/70 px-3 py-1 text-xs font-semibold text-tertiary shadow-sm"
              >
                {t(b)}
              </span>
            )
          )}
        </div>

        {/* CTA */}
        <div className="yellow-section mt-8 flex flex-wrap items-center justify-center gap-4 font-sans">
          <a
            href="#contacto"
            className="group relative overflow-hidden rounded-full bg-secondary px-6 py-2 font-semibold text-ink transition-all"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fa-solid fa-envelope mr-2" />
            {t('BUTTONS.CONTACT_ME')}
          </a>
          <a
            href={cvHref}
            download
            className="group relative overflow-hidden rounded-full border border-ink px-6 py-2 font-semibold text-ink transition-all hover:border-transparent"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fa-solid fa-file-arrow-down mr-2" />
            {t('BUTTONS.DOWNLOAD_CV')}
          </a>
          <a
            href="https://www.linkedin.com/in/juan-simon-berdugo-molero/"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-full border border-ink px-6 py-2 font-semibold text-ink transition-all hover:border-transparent"
          >
            <span className="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <i className="fab fa-linkedin mr-2" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bubbles */}
      <div className="bubbles pointer-events-none absolute inset-0">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              background: b.bg,
              animationDuration: b.dur,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
