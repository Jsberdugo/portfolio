import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  onYellow?: boolean;
}

export default function SectionHeading({ index, title, subtitle, dark, onYellow }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className={`font-mono text-sm ${dark ? 'text-primary' : onYellow ? 'text-ink' : 'text-ink-light'}`}>
        <span className={`mr-2 inline-block h-2 w-2 rounded-full ${onYellow ? 'bg-ink' : 'bg-primary ring-1 ring-black/10'}`} />
        {index}
      </p>
      <h2
        className={`mt-3 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-base md:text-lg ${dark ? 'text-white/65' : onYellow ? 'text-ink/75' : 'text-ink-light'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
