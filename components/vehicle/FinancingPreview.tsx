'use client';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { formatPrice } from '@/lib/formatting';
import { calculateMonthlyPayment } from '@/lib/financing';

interface FinancingPreviewProps {
  price: number;
  slug: string;
}

export default function FinancingPreview({ price, slug }: FinancingPreviewProps) {
  const { locale, t } = useLanguage();

  const { monthly } = calculateMonthlyPayment(price, 6.9, 60, price * 0.1);

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm font-semibold text-foreground">{t('vehicle.estimatedPayment')}</p>
      </div>
      <p className="text-3xl font-black text-primary">
        {formatPrice(Math.round(monthly), locale)}
        <span className="text-base font-normal text-muted ml-1">{t('vehicle.perMonth')}</span>
      </p>
      <p className="text-xs text-muted-light mt-2">60 {t('financing.months')} &middot; 6.9% APR &middot; 10% down</p>
      <Button
        href={`/financing?vehicle=${slug}`}
        variant="outline"
        size="sm"
        className="w-full mt-5"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        {t('vehicle.calculatePayment')}
      </Button>
    </div>
  );
}
