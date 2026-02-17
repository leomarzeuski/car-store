'use client';

import { useLanguage } from '@/context/LanguageContext';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2341] to-[#1a365d] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">
            {t('contact.title')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-foreground">{t('contact.formTitle')}</h3>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-foreground">{t('contact.infoTitle')}</h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t('contact.address')}</p>
                  <p className="text-muted text-sm mt-1">{t('contact.city')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-cyan-400 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t('contact.phone1')}</p>
                  <p className="text-muted text-sm mt-1">{t('contact.email1')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">{t('contact.hoursTitle')}</p>
                  <div className="space-y-1">
                    <p className="text-muted text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full" />
                      {t('contact.weekdays')}
                    </p>
                    <p className="text-muted text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      {t('contact.saturday')}
                    </p>
                    <p className="text-muted text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-sale rounded-full" />
                      {t('contact.sunday')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center border border-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground">Google Maps</p>
                <p className="text-xs text-muted mt-1">123 Auto Drive, Orlando, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
