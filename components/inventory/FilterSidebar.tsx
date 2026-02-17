'use client';

import { useLanguage } from '@/context/LanguageContext';
import {
  getUniqueBrands,
  getUniqueBodyTypes,
  getUniqueFuelTypes,
  getUniqueTransmissions,
} from '@/lib/vehicles';
import type { FilterState } from '@/types';

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  open: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ filters, onChange, open, onClose }: FilterSidebarProps) {
  const { t } = useLanguage();
  const brands = getUniqueBrands();
  const bodyTypes = getUniqueBodyTypes();
  const fuelTypes = getUniqueFuelTypes();
  const transmissions = getUniqueTransmissions();

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const arr = filters[key] as string[];
    const newArr = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    onChange({ ...filters, [key]: newArr });
  };

  const clearFilters = () => {
    onChange({
      brand: [],
      yearMin: null,
      yearMax: null,
      priceMin: null,
      priceMax: null,
      mileageMax: null,
      bodyType: [],
      fuelType: [],
      transmission: [],
      search: filters.search,
    });
  };

  const hasActiveFilters =
    filters.brand.length > 0 ||
    filters.bodyType.length > 0 ||
    filters.fuelType.length > 0 ||
    filters.transmission.length > 0 ||
    filters.yearMin !== null ||
    filters.yearMax !== null ||
    filters.priceMin !== null ||
    filters.priceMax !== null ||
    filters.mileageMax !== null;

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-foreground flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          {t('inventory.filters')}
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-bold text-sale hover:underline cursor-pointer uppercase tracking-wider"
          >
            {t('inventory.clearFilters')}
          </button>
        )}
      </div>

      {/* Brand */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.brand')}</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => toggleArrayFilter('brand', brand)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Year Range */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.year')}</h4>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder={t('inventory.yearMin')}
            value={filters.yearMin ?? ''}
            onChange={(e) =>
              onChange({ ...filters, yearMin: e.target.value ? Number(e.target.value) : null })
            }
            className="w-full px-3 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <input
            type="number"
            placeholder={t('inventory.yearMax')}
            value={filters.yearMax ?? ''}
            onChange={(e) =>
              onChange({ ...filters, yearMax: e.target.value ? Number(e.target.value) : null })
            }
            className="w-full px-3 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.price')}</h4>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder={t('inventory.priceMin')}
            value={filters.priceMin ?? ''}
            onChange={(e) =>
              onChange({ ...filters, priceMin: e.target.value ? Number(e.target.value) : null })
            }
            className="w-full px-3 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <input
            type="number"
            placeholder={t('inventory.priceMax')}
            value={filters.priceMax ?? ''}
            onChange={(e) =>
              onChange({ ...filters, priceMax: e.target.value ? Number(e.target.value) : null })
            }
            className="w-full px-3 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Mileage */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.mileage')}</h4>
        <input
          type="number"
          placeholder={t('inventory.mileageMax')}
          value={filters.mileageMax ?? ''}
          onChange={(e) =>
            onChange({ ...filters, mileageMax: e.target.value ? Number(e.target.value) : null })
          }
          className="w-full px-3 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      {/* Body Type */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.bodyType')}</h4>
        <div className="space-y-2">
          {bodyTypes.map((type) => (
            <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.bodyType.includes(type)}
                onChange={() => toggleArrayFilter('bodyType', type)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">{t(`bodyTypes.${type}`)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.fuelType')}</h4>
        <div className="space-y-2">
          {fuelTypes.map((type) => (
            <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.fuelType.includes(type)}
                onChange={() => toggleArrayFilter('fuelType', type)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">{t(`fuelTypes.${type}`)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3">{t('inventory.transmission')}</h4>
        <div className="space-y-2">
          {transmissions.map((type) => (
            <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.transmission.includes(type)}
                onChange={() => toggleArrayFilter('transmission', type)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
              />
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">{t(`transmissions.${type}`)}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-80 bg-background p-6 overflow-y-auto shadow-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-foreground cursor-pointer hover:bg-primary/5 rounded-lg transition-colors"
              aria-label="Close filters"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
