'use client';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPreview() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: t('about.why1'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: t('about.why2'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      text: t('about.why3'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: t('about.why4'),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative h-[420px] bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#0c1a35] rounded-3xl overflow-hidden border border-white/5">
              {/* Inner decorations */}
              <div className="absolute top-6 right-6 w-32 h-32 bg-primary-light/20 rounded-full blur-[40px]" />
              <div className="absolute bottom-6 left-6 w-24 h-24 bg-secondary/20 rounded-full blur-[30px]" />

              <div className="relative h-full flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-secondary/30 animate-float">
                  <span className="text-white text-3xl font-black">CW</span>
                </div>
                <p className="text-3xl font-black text-white tracking-tight">Car Warriors</p>
                <p className="text-white/30 text-sm font-semibold tracking-[0.3em] uppercase mt-1">Since 2015</p>

                {/* Stats row */}
                <div className="flex gap-8 mt-10">
                  {[
                    { val: '500+', lab: t('nav.inventory') === 'Estoque' ? 'Vendas' : 'Sales' },
                    { val: 'A+', lab: 'BBB Rating' },
                    { val: '4.9', lab: 'Google' },
                  ].map((s) => (
                    <div key={s.lab} className="text-center">
                      <p className="text-xl font-black text-secondary">{s.val}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{s.lab}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-card border border-border rounded-2xl p-4 shadow-xl shadow-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t('nav.inventory') === 'Estoque' ? 'Confiança Verificada' : 'Verified Trust'}
                  </p>
                  <p className="text-xs text-muted">98% satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              {t('nav.inventory') === 'Estoque' ? 'Sobre N\u00f3s' : 'About Us'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
              {t('home.aboutTitle')}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              {t('home.aboutText')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary-light">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-semibold text-foreground mt-1.5">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" size="lg" className="bg-gradient-to-r from-primary to-primary-light text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
              {t('home.aboutCta')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
