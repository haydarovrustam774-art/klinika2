'use client';
import { useTranslations } from 'next-intl';
import { useDeviceTier } from '@/hooks/useDeviceTier';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LangSwitcher } from '@/components/layout/LangSwitcher';
import { site } from '@/lib/content';

/** Faqat poydevorni tekshirish uchun. 2-bosqichda Hero bilan almashtiriladi. */
export function FoundationPreview() {
  const t = useTranslations('foundation');
  const tier = useDeviceTier();

  return (
    <main id="main" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Bezak: yumshoq brend nurlari */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-from/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-to/25 blur-3xl" />
      </div>

      <section className="glass w-full max-w-xl rounded-xl p-8 md:p-12">
        <p className="mb-3 text-sm font-medium text-muted-foreground">{site.name}</p>
        <h1 className="text-h2 text-brand-gradient">{t('title')}</h1>
        <p className="text-lead mt-4 text-muted-foreground">{t('text')}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <LangSwitcher />
          <ThemeToggle />
          <span className="rounded-full bg-muted px-4 py-2 text-sm">
            {t('tier')}: <b>{tier ?? '…'}</b>
          </span>
        </div>
      </section>
    </main>
  );
}
