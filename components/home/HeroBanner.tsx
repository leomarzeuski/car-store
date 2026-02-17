'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background banner image */}
      <Image
        src="https://dcdws.blob.core.windows.net/dws-14031841-51122-media/sites/51122/2025/08/Banner-CARWARRIORS.png"
        alt="Car Warriors LLC"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="max-w-2xl animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white/80">
              {t('nav.inventory') === 'Estoque' ? 'Estoque Atualizado Hoje' : 'Inventory Updated Today'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {t('home.heroTitle').split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="gradient-text"> {word}</span>
              ) : (
                <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
              )
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/inventory" size="lg" className="bg-gradient-to-r from-secondary to-secondary-light text-white font-bold shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all border-0">
              {t('home.heroCta')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Button>
            <Button href="/schedule" size="lg" className="glass text-white hover:bg-white/15 border-white/20 transition-all">
              {t('home.heroCtaSecondary')}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-10">
            {[
              { value: '500+', label: t('nav.inventory') === 'Estoque' ? 'Veículos Vendidos' : 'Cars Sold' },
              { value: '98%', label: t('nav.inventory') === 'Estoque' ? 'Satisfação' : 'Satisfaction' },
              { value: '10+', label: t('nav.inventory') === 'Estoque' ? 'Anos' : 'Years' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute top-32 right-10 hidden xl:block">
        <div className="px-5 py-3 bg-success/90 backdrop-blur-sm rounded-xl text-white text-sm font-bold shadow-xl animate-float">
          0% APR Available
        </div>
      </div>
      <div className="absolute bottom-32 right-20 hidden xl:block">
        <div className="px-5 py-3 bg-sale/90 backdrop-blur-sm rounded-xl text-white text-sm font-bold shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
          MEGA SALE!
        </div>
      </div>
    </section>
  );
}
