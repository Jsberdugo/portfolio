import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const socials = [
    {
      href: 'https://www.linkedin.com/in/juan-simon-berdugo-molero/',
      icon: 'fab fa-linkedin-in',
    },
    { href: 'https://instagram.com/berdugo.js', icon: 'fab fa-instagram' },
    { href: 'mailto:juan@berdugojs.com', icon: 'fas fa-envelope' },
  ];

  const links = [
    { href: '#sobre-mi', key: 'FOOTER.ABOUT_ME' },
    { href: '#proyectos', key: 'FOOTER.PORTFOLIO' },
    { href: '#contacto', key: 'FOOTER.CONTACT' },
  ];

  return (
    <footer className="bg-bg px-6 pb-6 pt-12 font-sans text-ink-light">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h3 className="mb-1 font-mono text-xl text-ink">
            {t('FOOTER.TITLE')}
          </h3>
          <p className="mb-4">{t('FOOTER.SUBTITLE')}</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-300/40 text-ink-light transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-primary hover:to-tertiary hover:text-ink"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h4 className="mb-3 font-semibold text-ink">
            {t('FOOTER.QUICK_LINKS')}
          </h4>
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-tertiary"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-ink-light">
        <p>{t('FOOTER.COPYRIGHT')}</p>
      </div>
    </footer>
  );
}
