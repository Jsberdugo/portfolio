import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'es';

  const change = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('app_lang', lang);
  };

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-black/10 bg-white/70 p-0.5 shadow-sm backdrop-blur">
      {LANGS.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            onClick={() => change(l.code)}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
              active
                ? 'bg-primary text-ink shadow'
                : 'text-ink-light hover:text-tertiary'
            }`}
            aria-pressed={active}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
