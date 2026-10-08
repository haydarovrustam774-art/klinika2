import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'uz',
});

export type Locale = (typeof routing.locales)[number];

// Til bilan ishlaydigan Link / useRouter / usePathname
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
