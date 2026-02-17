'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { formatPrice } from '@/lib/formatting';
import { calculateMonthlyPayment } from '@/lib/financing';
import Input from '@/components/ui/Input';

interface PaymentCalculatorProps {
  initialPrice?: number;
}

export default function PaymentCalculator({ initialPrice }: PaymentCalculatorProps) {
  const { locale, t } = useLanguage();
  const [price, setPrice] = useState(initialPrice || 35000);
  const [downPayment, setDownPayment] = useState(initialPrice ? Math.round(initialPrice * 0.1) : 3500);
  const [term, setTerm] = useState(60);
  const [rate, setRate] = useState(6.9);

  const result = useMemo(
    () => calculateMonthlyPayment(price, rate, term, downPayment),
    [price, rate, term, downPayment]
  );

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-32 translate-x-32" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-foreground">{t('financing.calculatorTitle')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <Input
              label={t('financing.vehiclePrice')}
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min={0}
            />
            <Input
              label={t('financing.downPayment')}
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              min={0}
            />
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-foreground">
                {t('financing.loanTerm')}
              </label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              >
                {[24, 36, 48, 60, 72].map((m) => (
                  <option key={m} value={m}>
                    {m} {t('financing.months')}
                  </option>
                ))}
              </select>
            </div>
            <Input
              label={t('financing.interestRate')}
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min={0}
              max={30}
              step={0.1}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 space-y-6 border border-primary/10">
              <div className="text-center">
                <p className="text-sm text-muted mb-2 font-medium">{t('financing.monthlyPayment')}</p>
                <p className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {formatPrice(Math.round(result.monthly), locale)}
                </p>
                <p className="text-sm text-muted mt-2">/ {t('financing.months').toLowerCase().slice(0, -1)}</p>
              </div>
              <div className="space-y-3 pt-5 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{t('financing.totalInterest')}</span>
                  <span className="font-bold text-foreground">
                    {formatPrice(Math.round(result.totalInterest), locale)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{t('financing.totalCost')}</span>
                  <span className="font-bold text-foreground">
                    {formatPrice(Math.round(result.totalCost), locale)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
