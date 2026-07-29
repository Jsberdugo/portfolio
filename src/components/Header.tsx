import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const LINKS = [
  { href: '#inicio', key: 'NAVIGATION.HOME' },
  { href: '#experiencia', key: 'NAVIGATION.EXPERIENCE' },
  { href: '#skills', key: 'NAVIGATION.SKILLS' },
  { href: '#proyectos', key: 'NAVIGATION.PROJECTS' },
  { href: '#contacto', key: 'NAVIGATION.CONTACT' },
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
      className={`fixed left-1/2 top-3 z-[1000] w-max -translate-x-1/2 rounded-full px-4 py-1.5 backdrop-blur-md transition-all duration-300 md:px-7 ${
        scrolled
          ? 'bg-white/80 shadow-soft'
          : 'bg-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
      }`}
    >
      <nav className="flex items-center gap-3 md:gap-8">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13px] font-bold text-ink-light transition-colors duration-200 hover:text-tertiary md:text-sm"
          >
            {t(l.key)}
          </a>
        ))}
        <LanguageToggle />
      </nav>
    </header>
  );
}
