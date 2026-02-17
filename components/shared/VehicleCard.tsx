'use client';

import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { formatPrice, formatMileage } from '@/lib/formatting';
import type { Vehicle } from '@/types';

interface VehicleCardProps {
  vehicle: Vehicle;
  layout?: 'grid' | 'list';
}

const conditionVariant = {
  new: 'success' as const,
  used: 'default' as const,
  certified: 'info' as const,
};

export default function VehicleCard({ vehicle, layout = 'grid' }: VehicleCardProps) {
  const { locale, t } = useLanguage();

  if (layout === 'list') {
    return (
      <Link
        href={`/inventory/${vehicle.slug}`}
        className="group flex flex-col sm:flex-row bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20"
        aria-label={`${vehicle.year} ${vehicle.brand} ${vehicle.model} - ${formatPrice(vehicle.price, locale)}`}
      >
        <div className="relative w-full sm:w-80 h-48 sm:h-auto shrink-0 overflow-hidden">
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <Badge variant={conditionVariant[vehicle.condition]} className="absolute top-3 left-3">
            {t(`conditions.${vehicle.condition}`)}
          </Badge>
          {vehicle.isFeatured && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-secondary to-secondary-light rounded-md text-[10px] text-white font-bold uppercase tracking-wider shadow-lg">
              Hot
            </div>
          )}
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-light transition-colors">
              {vehicle.year} {vehicle.brand} {vehicle.model}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: formatMileage(vehicle.mileage, locale) },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: `${vehicle.horsepower} ${t('common.hp')}` },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-muted bg-input px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.text}
                </span>
              ))}
              <span className="text-sm text-muted bg-input px-3 py-1 rounded-full">{t(`fuelTypes.${vehicle.fuelType}`)}</span>
              <span className="text-sm text-muted bg-input px-3 py-1 rounded-full">{t(`transmissions.${vehicle.transmission}`)}</span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-2xl font-black text-primary">
              {formatPrice(vehicle.price, locale)}
            </p>
            <span className="text-sm font-bold text-primary-light group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              {t('common.viewDetails')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/inventory/${vehicle.slug}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 flex flex-col"
      aria-label={`${vehicle.year} ${vehicle.brand} ${vehicle.model} - ${formatPrice(vehicle.price, locale)}`}
    >
      <div className="relative h-52 md:h-56 overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <Badge variant={conditionVariant[vehicle.condition]} className="absolute top-3 left-3">
          {t(`conditions.${vehicle.condition}`)}
        </Badge>
        {vehicle.isFeatured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-secondary to-secondary-light rounded-lg text-[10px] text-white font-bold uppercase tracking-wider shadow-lg">
            Hot Deal
          </div>
        )}
        {/* Price overlay on image */}
        <div className="absolute bottom-3 right-3 px-4 py-2 bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-xl shadow-lg">
          <p className="text-lg font-black text-primary">{formatPrice(vehicle.price, locale)}</p>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-foreground group-hover:text-primary-light transition-colors">
          {vehicle.year} {vehicle.brand} {vehicle.model}
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="flex items-center gap-1 text-xs text-muted bg-input px-2.5 py-1 rounded-full">
            <svg className="w-3 h-3 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {vehicle.horsepower} {t('common.hp')}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted bg-input px-2.5 py-1 rounded-full">
            <svg className="w-3 h-3 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatMileage(vehicle.mileage, locale)}
          </span>
          <span className="text-xs text-muted bg-input px-2.5 py-1 rounded-full">{t(`transmissions.${vehicle.transmission}`)}</span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border mt-4">
          <span className="text-xs text-muted">{t(`bodyTypes.${vehicle.bodyType}`)} &middot; {t(`fuelTypes.${vehicle.fuelType}`)}</span>
          <span className="text-xs font-bold text-primary-light group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            {t('common.viewDetails')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
