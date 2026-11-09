import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

export default function SobreMi() {
  const { t } = useTranslation();
  const strong = 'font-bold text-ink';

  return (
    <section id="sobre-mi" className="overflow-hidden px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-14">
        <Reveal direction="left" className="overflow-hidden rounded-[32px] bg-primary/30 p-6 md:p-10">
          <img
            src="/img/sobremi.png"
            alt={t('ABOUT.TITLE')}
            loading="lazy"
            className="mx-auto max-h-[420px] w-auto rounded-2xl object-contain"
          />
        </Reveal>

        <Reveal direction="right">
          <p className="font-mono text-sm text-ink-light">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary ring-1 ring-black/10" />
            03
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            {t('ABOUT.TITLE')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-light">
            {t('ABOUT.PART1')}
            <strong className={strong}>{t('ABOUT.NAME')}</strong>
            {t('ABOUT.PART2')}
            <strong className={strong}>{t('ABOUT.SPECIALTY')}</strong>
            {t('ABOUT.PART3')}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-light">
            {t('ABOUT.PART4')}
            <strong className={strong}>{t('ABOUT.COMPANY1')}</strong>
            {t('ABOUT.PART5')}
            <strong className={strong}>{t('ABOUT.COMPANY2')}</strong>
            {t('ABOUT.PART6')}
            <strong className={strong}>{t('ABOUT.TECH1')}</strong>
            {t('ABOUT.PART7')}
            <strong className={strong}>{t('ABOUT.TECH2')}</strong>
            {t('ABOUT.PART8')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
