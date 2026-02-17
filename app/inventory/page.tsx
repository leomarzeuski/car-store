'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import SearchBar from '@/components/inventory/SearchBar';
import FilterSidebar from '@/components/inventory/FilterSidebar';
import VehicleGrid from '@/components/inventory/VehicleGrid';
import ViewToggle from '@/components/inventory/ViewToggle';
import Pagination from '@/components/inventory/Pagination';
import { filterVehicles, sortVehicles, paginateVehicles } from '@/lib/vehicles';
import type { FilterState } from '@/types';

const PER_PAGE = 9;

function parseFiltersFromParams(params: URLSearchParams): FilterState {
  return {
    search: params.get('q') || '',
    brand: params.get('brand')?.split(',').filter(Boolean) || [],
    yearMin: params.get('yearMin') ? Number(params.get('yearMin')) : null,
    yearMax: params.get('yearMax') ? Number(params.get('yearMax')) : null,
    priceMin: params.get('priceMin') ? Number(params.get('priceMin')) : null,
    priceMax: params.get('priceMax') ? Number(params.get('priceMax')) : null,
    mileageMax: params.get('mileageMax') ? Number(params.get('mileageMax')) : null,
    bodyType: params.get('bodyType')?.split(',').filter(Boolean) || [],
    fuelType: params.get('fuelType')?.split(',').filter(Boolean) || [],
    transmission: params.get('transmission')?.split(',').filter(Boolean) || [],
  };
}

function filtersToParams(filters: FilterState): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.search) params.set('q', filters.search);
  if (filters.brand.length) params.set('brand', filters.brand.join(','));
  if (filters.yearMin) params.set('yearMin', String(filters.yearMin));
  if (filters.yearMax) params.set('yearMax', String(filters.yearMax));
  if (filters.priceMin) params.set('priceMin', String(filters.priceMin));
  if (filters.priceMax) params.set('priceMax', String(filters.priceMax));
  if (filters.mileageMax) params.set('mileageMax', String(filters.mileageMax));
  if (filters.bodyType.length) params.set('bodyType', filters.bodyType.join(','));
  if (filters.fuelType.length) params.set('fuelType', filters.fuelType.join(','));
  if (filters.transmission.length) params.set('transmission', filters.transmission.join(','));
  return params;
}

function InventoryContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<FilterState>(() =>
    parseFiltersFromParams(searchParams)
  );
  const [sortBy, setSortBy] = useState('price-asc');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = filtersToParams(filters);
    if (page > 1) params.set('page', String(page));
    const paramString = params.toString();
    router.replace(`/inventory${paramString ? `?${paramString}` : ''}`, { scroll: false });
  }, [filters, page, router]);

  const filteredVehicles = useMemo(() => {
    const filtered = filterVehicles(filters);
    return sortVehicles(filtered, sortBy);
  }, [filters, sortBy]);

  const { vehicles: pageVehicles, totalPages, total } = useMemo(
    () => paginateVehicles(filteredVehicles, page, PER_PAGE),
    [filteredVehicles, page]
  );

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleSearchChange = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setPage(1);
  };

  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, total);

  return (
    <div className="bg-background">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2341] to-[#1a365d] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,58,138,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('inventory.title')}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">{t('inventory.subtitle')}</p>

          {/* Search bar in hero */}
          <div className="max-w-2xl mx-auto mt-10">
            <SearchBar value={filters.search} onChange={handleSearchChange} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            {total > 0 && (
              <p className="text-sm text-muted">
                {t('inventory.showing')} <span className="font-bold text-foreground">{start}-{end}</span> {t('inventory.of')} <span className="font-bold text-foreground">{total}</span> {t('inventory.vehicles')}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl border border-border text-sm font-bold text-foreground hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {t('inventory.filters')}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            >
              <option value="price-asc">{t('inventory.sortPriceLow')}</option>
              <option value="price-desc">{t('inventory.sortPriceHigh')}</option>
              <option value="year-desc">{t('inventory.sortYearNew')}</option>
              <option value="year-asc">{t('inventory.sortYearOld')}</option>
              <option value="mileage-asc">{t('inventory.sortMileageLow')}</option>
            </select>
            <ViewToggle view={view} onChange={setView} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={handleFilterChange}
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
          />
          <div className="flex-1">
            <VehicleGrid vehicles={pageVehicles} view={view} />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InventoryPage() {
  return (
    <Suspense>
      <InventoryContent />
    </Suspense>
  );
}
