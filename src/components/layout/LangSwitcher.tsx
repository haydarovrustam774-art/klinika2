'use client';
import { useLocale, useTranslations } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LangSwitcher({ className }: { className?: string }) {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t('language')}
      className={cn('glass inline-flex rounded-full p-1 text-sm font-medium', className)}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={l === locale}
          onClick={() => router.replace(pathname, { locale: l })}
          className={cn(
            'min-h-[36px] min-w-[44px] rounded-full px-3 transition-colors duration-fast',
            l === locale ? 'btn-gradient' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
