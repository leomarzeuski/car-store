'use client';

import { useLanguage } from '@/context/LanguageContext';
import VehicleCard from '@/components/shared/VehicleCard';
import Button from '@/components/ui/Button';
import { getFeaturedVehicles } from '@/lib/vehicles';

export default function FeaturedVehicles() {
  const { t } = useLanguage();
  const featured = getFeaturedVehicles().slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-background relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-light/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-light text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            {t('nav.inventory') === 'Estoque' ? 'Destaques' : 'Featured'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {t('home.featuredTitle')}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t('home.featuredSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button href="/inventory" variant="primary" size="lg" className="bg-gradient-to-r from-primary to-primary-light text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
            {t('home.viewAll')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
