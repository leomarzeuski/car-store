'use client';

import { useLanguage } from '@/context/LanguageContext';
import { formatMileage } from '@/lib/formatting';
import type { Vehicle } from '@/types';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const { locale, t } = useLanguage();

  const specs = [
    { label: t('common.year'), value: String(vehicle.year), icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: t('common.mileage'), value: formatMileage(vehicle.mileage, locale), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: t('vehicle.engine'), value: vehicle.engine, icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: t('vehicle.horsepower'), value: `${vehicle.horsepower} ${t('common.hp')}`, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: t('inventory.transmission'), value: t(`transmissions.${vehicle.transmission}`), icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
    { label: t('vehicle.drivetrain'), value: vehicle.drivetrain, icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: t('inventory.fuelType'), value: t(`fuelTypes.${vehicle.fuelType}`), icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' },
    { label: t('inventory.bodyType'), value: t(`bodyTypes.${vehicle.bodyType}`), icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { label: t('vehicle.doors'), value: String(vehicle.doors), icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: t('vehicle.seats'), value: String(vehicle.seats), icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: t('vehicle.exteriorColor'), value: vehicle.exteriorColor, icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { label: t('vehicle.interiorColor'), value: vehicle.interiorColor, icon: 'M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25C9.996 3 10.5 3.504 10.5 4.125v5.25c0 .621-.504 1.125-1.125 1.125h-5.25' },
    { label: t('vehicle.condition'), value: t(`conditions.${vehicle.condition}`), icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { label: t('vehicle.vin'), value: vehicle.vin, icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Specifications */}
      <div>
        <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          {t('vehicle.specifications')}
        </h2>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex items-center justify-between py-3.5 px-5 ${
                i !== specs.length - 1 ? 'border-b border-border' : ''
              } hover:bg-primary/3 transition-colors`}
            >
              <span className="flex items-center gap-3 text-sm text-muted">
                <svg className="w-4 h-4 text-primary-light/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                </svg>
                {spec.label}
              </span>
              <span className="text-sm font-semibold text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {t('vehicle.features')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {vehicle.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-success/30 hover:bg-success/5 transition-colors"
            >
              <div className="w-7 h-7 bg-success/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
