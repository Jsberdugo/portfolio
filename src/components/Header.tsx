import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const LINKS = [
  { href: '#inicio', key: 'NAVIGATION.HOME', icon: 'fa-solid fa-house' },
  { href: '#experiencia', key: 'NAVIGATION.EXPERIENCE', icon: 'fa-solid fa-briefcase' },
  { href: '#skills', key: 'NAVIGATION.SKILLS', icon: 'fa-solid fa-layer-group' },
  { href: '#proyectos', key: 'NAVIGATION.PROJECTS', icon: 'fa-solid fa-laptop-code' },
  { href: '#contacto', key: 'NAVIGATION.CONTACT', icon: 'fa-solid fa-envelope' },
];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[1000] flex items-center justify-around gap-1 px-2 py-2 backdrop-blur-md transition-all duration-300 md:left-1/2 md:right-auto md:top-3 md:w-max md:-translate-x-1/2 md:justify-center md:gap-8 md:rounded-full md:px-7 md:py-1.5 ${
        scrolled
          ? 'bg-white/85 shadow-soft'
          : 'bg-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:bg-white/50'
      }`}
    >
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="flex flex-col items-center gap-0.5 text-ink-light transition-colors duration-200 hover:text-tertiary md:flex-row md:gap-0"
        >
          <i className={`${l.icon} text-base md:hidden`} />
          <span className="whitespace-nowrap text-[10px] font-bold leading-tight md:text-sm">
            {t(l.key)}
          </span>
        </a>
      ))}
      <LanguageToggle />
    </header>
  );
}
