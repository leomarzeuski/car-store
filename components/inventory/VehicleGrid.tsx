'use client';

import VehicleCard from '@/components/shared/VehicleCard';
import { useLanguage } from '@/context/LanguageContext';
import type { Vehicle } from '@/types';

interface VehicleGridProps {
  vehicles: Vehicle[];
  view: 'grid' | 'list';
}

export default function VehicleGrid({ vehicles, view }: VehicleGridProps) {
  const { t } = useLanguage();

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-16">
        <svg
          className="w-16 h-16 text-muted-light mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {t('inventory.noResults')}
        </h3>
        <p className="text-muted">{t('inventory.noResultsSub')}</p>
      </div>
    );
  }

  if (view === 'list') {
    return (
      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} layout="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} layout="grid" />
      ))}
    </div>
  );
}
