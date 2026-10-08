import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { Providers } from '@/components/providers/Providers';
import { site, siteUrl } from '@/lib/content';
import '@/styles/globals.css';

// Plus Jakarta Sans kirill harflarini qo'llamaydi: rus tilida sarlavhalar
// avtomatik Inter (cyrillic) ga tushadi (globals.css dagi font-family zanjiri).
const heading = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t('title', { name: site.name }), template: `%s | ${site.name}` },
    description: t('description', { name: site.name }),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale,
      title: t('title', { name: site.name }),
      description: t('description', { name: site.name }),
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#060B18' },
  ],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <html lang={locale} suppressHydrationWarning className={`${heading.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:shadow-soft"
        >
          {t('skipToContent')}
        </a>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
