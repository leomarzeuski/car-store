'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import ScheduleForm from '@/components/forms/ScheduleForm';

function ScheduleContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const vehicle = searchParams.get('vehicle') || undefined;

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2341] to-[#1a365d] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-accent/20">
            {t('schedule.title')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('schedule.title')}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">{t('schedule.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-card border border-border rounded-2xl p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-muted uppercase tracking-wider">Mon - Sat</p>
            <p className="text-sm font-bold text-foreground mt-1">9AM - 7PM</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-4 text-center">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-muted uppercase tracking-wider">Response</p>
            <p className="text-sm font-bold text-foreground mt-1">&lt; 1 Hour</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-4 text-center">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xs font-bold text-muted uppercase tracking-wider">Free</p>
            <p className="text-sm font-bold text-foreground mt-1">No Obligation</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <ScheduleForm preselectedVehicle={vehicle} />
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleContent />
    </Suspense>
  );
}
