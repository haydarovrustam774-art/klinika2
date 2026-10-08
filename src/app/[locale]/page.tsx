import { setRequestLocale } from 'next-intl/server';
import { FoundationPreview } from '@/components/sections/FoundationPreview';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <FoundationPreview />;
}
