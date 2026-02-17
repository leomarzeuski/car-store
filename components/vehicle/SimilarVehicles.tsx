'use client';

import { useLanguage } from '@/context/LanguageContext';
import SectionHeading from '@/components/shared/SectionHeading';
import VehicleCard from '@/components/shared/VehicleCard';
import { getSimilarVehicles } from '@/lib/vehicles';
import type { Vehicle } from '@/types';

interface SimilarVehiclesProps {
  vehicle: Vehicle;
}

export default function SimilarVehicles({ vehicle }: SimilarVehiclesProps) {
  const { t } = useLanguage();
  const similar = getSimilarVehicles(vehicle, 3);

  if (similar.length === 0) return null;

  return (
    <section className="mt-16">
      <SectionHeading title={t('vehicle.similarVehicles')} centered={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similar.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>
    </section>
  );
}
