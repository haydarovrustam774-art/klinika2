import siteConfig from '../../content/site.config.json';
import type { Locale } from '@/i18n/routing';

/** Klinika sozlamalari: content/site.config.json dan o'qiladi. */
export const site = siteConfig;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function getAddress(locale: Locale | string): string {
  const a = site.address as Record<string, string>;
  return a[locale] ?? a.uz;
}
