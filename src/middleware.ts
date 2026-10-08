import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // api, _next, va fayllar (nuqtali yo'llar) o'tkazib yuboriladi
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
