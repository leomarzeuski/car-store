import type { Locale } from '@/types';

export function formatPrice(price: number, locale: Locale = 'en'): string {
  return new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(miles: number, locale: Locale = 'en'): string {
  const formatted = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US').format(miles);
  return `${formatted} mi`;
}

export function formatDate(dateStr: string, locale: Locale = 'en'): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
