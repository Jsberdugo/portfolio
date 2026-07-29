import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import { sendMessage } from '../services/contact';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const EMPTY: FormState = { name: '', email: '', phone: '', subject: '' };

export default function Contacto() {
  const { t } = useTranslation();

  const [form, setForm] = useState<FormState>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const phoneOk = /^[0-9]{7,15}$/.test(form.phone);
  const valid =
    form.name.trim() && emailOk && phoneOk && form.subject.trim();

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError(false);
    try {
      await sendMessage(form);
      setSubmitted(true);
      setForm(EMPTY);
    } catch {
      setError(true);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:shadow-glow';

  return (
    <section id="contacto" className="flex justify-center px-4 py-20">
      <Reveal
        direction="zoom"
        className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:grid-cols-2"
      >
        {/* Left: yellow info */}
        <div className="yellow-section flex flex-col justify-center gap-7 bg-gradient-to-r from-primary via-secondary to-tertiary p-10 text-ink">
          <div>
            <h2 className="mb-2 text-3xl font-bold">{t('CONTACT.TITLE')}</h2>
            <p className="font-mono text-[17px] leading-relaxed">
              {t('CONTACT.INTRO')}
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <i className="fa-brands fa-whatsapp text-xl" />
              <a
                href="https://wa.me/584121272740"
                target="_blank"
                rel="noreferrer"
                className="font-semibold transition-opacity hover:opacity-70"
              >
                +58 412 127 2740
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-xl" />
              <a
                href="mailto:juan@berdugojs.com"
                className="font-semibold transition-opacity hover:opacity-70"
              >
                juan@berdugojs.com
              </a>
            </li>
          </ul>

          <div className="flex gap-3">
            {[
              {
                href: 'https://www.linkedin.com/in/juan-simon-berdugo-molero/',
                icon: 'fa-brands fa-linkedin-in',
              },
              {
                href: 'https://www.instagram.com/berdugo.js',
                icon: 'fa-brands fa-instagram',
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-all hover:bg-ink hover:text-primary"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-center bg-white p-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">
                {t('CONTACT.FORM.NAME')} <span className="text-tertiary">*</span>
              </label>
              <input className={inputCls} value={form.name} onChange={update('name')} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">
                {t('CONTACT.FORM.EMAIL')} <span className="text-tertiary">*</span>
              </label>
              <input
                type="email"
                className={inputCls}
                value={form.email}
                onChange={update('email')}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">
                {t('CONTACT.FORM.PHONE')} <span className="text-tertiary">*</span>
              </label>
              <input
                type="tel"
                className={inputCls}
                value={form.phone}
                onChange={update('phone')}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">
                {t('CONTACT.FORM.MESSAGE')}{' '}
                <span className="text-tertiary">*</span>
              </label>
              <textarea
                rows={4}
                className={`${inputCls} rounded-2xl`}
                value={form.subject}
                onChange={update('subject')}
              />
            </div>

            <button
              type="submit"
              disabled={!valid || loading}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-neutral-200 px-6 py-2.5 font-bold text-ink shadow-soft transition-all hover:bg-primary active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin" />
                  {t('CONTACT.FORM.SENDING')}
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" />
                  {t('CONTACT.FORM.SEND')}
                </>
              )}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 font-medium text-green-600">
              {t('CONTACT.MESSAGES.THANK_YOU')}
            </p>
          )}
          {error && (
            <p className="mt-4 font-medium text-red-600">
              {t('CONTACT.MESSAGES.ERROR')}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
