import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="w-full overflow-hidden px-4 py-20 md:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Image */}
        <Reveal
          direction="left"
          className="order-first flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-tertiary/20 p-6 md:row-span-2"
        >
          <img
            src="/img/sobremi.png"
            alt="Ilustración desarrollador"
            className="max-w-[90%] rounded-xl object-contain drop-shadow-xl"
          />
        </Reveal>

        {/* Presentation card */}
        <Reveal direction="right" className="rounded-3xl bg-white p-7 shadow-card">
          <div className="mb-3 flex items-center gap-3">
            <i className="fa-solid fa-user-check text-2xl text-tertiary" />
            <h2 className="text-2xl font-bold text-ink">{t('ABOUT.TITLE')}</h2>
          </div>
          <p className="text-ink-light">
            {t('ABOUT.PART1')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.NAME')}
            </strong>
            {t('ABOUT.PART2')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.SPECIALTY')}
            </strong>
            {t('ABOUT.PART3')}
          </p>
        </Reveal>

        {/* Trajectory */}
        <Reveal
          direction="right"
          delay={0.12}
          className="rounded-2xl border-l-4 border-tertiary bg-white/90 p-7"
        >
          <p className="leading-relaxed text-ink">
            {t('ABOUT.PART4')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.COMPANY1')}
            </strong>
            {t('ABOUT.PART5')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.COMPANY2')}
            </strong>
            {t('ABOUT.PART6')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.TECH1')}
            </strong>
            {t('ABOUT.PART7')}
            <strong className="font-semibold text-tertiary">
              {t('ABOUT.TECH2')}
            </strong>
            {t('ABOUT.PART8')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
