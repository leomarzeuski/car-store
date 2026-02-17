'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import PaymentCalculator from '@/components/financing/PaymentCalculator';
import ApplicationForm from '@/components/financing/ApplicationForm';
import { getVehicleBySlug } from '@/lib/vehicles';

function FinancingContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const vehicleSlug = searchParams.get('vehicle');
  const vehicle = vehicleSlug ? getVehicleBySlug(vehicleSlug) : undefined;

  const partners = [
    'Capital One Auto',
    'Chase Auto',
    'Bank of America',
    'Wells Fargo',
    'Ally Financial',
    'US Bank',
  ];

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2341] to-[#1a365d] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm text-secondary-light text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-secondary/20">
            {t('financing.title')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('financing.title')}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">{t('financing.subtitle')}</p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-sm text-blue-200/70">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              0% APR Available
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200/70">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All Credit Accepted
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200/70">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quick Approval
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-foreground mb-4">{t('financing.introTitle')}</h3>
          <p className="text-muted text-lg leading-relaxed">{t('financing.introText')}</p>
        </div>

        <div className="mb-20">
          <PaymentCalculator initialPrice={vehicle?.price} />
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-black text-foreground text-center mb-10">
            {t('financing.partnersTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-card border border-border rounded-2xl p-5 text-center flex items-center justify-center h-24 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-sm font-bold text-muted group-hover:text-primary-light transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-foreground mb-2">
              {t('financing.applyTitle')}
            </h3>
            <p className="text-muted">{t('financing.applySubtitle')}</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <ApplicationForm preselectedVehicle={vehicleSlug || undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FinancingPage() {
  return (
    <Suspense>
      <FinancingContent />
    </Suspense>
  );
}
