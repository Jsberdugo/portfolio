import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const LINKS = [
  { href: '#proyectos', key: 'NAVIGATION.PROJECTS' },
  { href: '#experiencia', key: 'NAVIGATION.EXPERIENCE' },
  { href: '#skills', key: 'NAVIGATION.SKILLS' },
  { href: '#contacto', key: 'NAVIGATION.CONTACT' },
];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-3 top-3 z-[1000] mx-auto max-w-5xl">
      <div
        className={`flex items-center justify-between rounded-full border border-black/5 py-2 pl-2 pr-2 backdrop-blur-md transition-all duration-300 md:pr-3 ${
          scrolled || open ? 'bg-white/90 shadow-soft' : 'bg-white/70'
        }`}
      >
        <a href="#inicio" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <img
            src="/img/pfp-yellow.png"
            alt=""
            className="h-9 w-9 rounded-full bg-primary object-cover"
          />
          <span className="font-mono-bold text-sm text-ink">berdugo.js</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-light transition-colors hover:text-ink"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white md:hidden"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col rounded-3xl border border-black/5 bg-white p-3 shadow-soft md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-bold text-ink active:bg-primary"
            >
              {t(l.key)}
              <i className="fa-solid fa-arrow-right text-sm" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
