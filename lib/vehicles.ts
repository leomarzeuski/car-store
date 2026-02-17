import vehiclesData from '@/data/vehicles.json';
import type { Vehicle, FilterState } from '@/types';

const vehicles: Vehicle[] = vehiclesData as Vehicle[];

export function getAllVehicles(): Vehicle[] {
  return vehicles;
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.isFeatured);
}

export function getUniqueBrands(): string[] {
  return [...new Set(vehicles.map((v) => v.brand))].sort();
}

export function getUniqueBodyTypes(): string[] {
  return [...new Set(vehicles.map((v) => v.bodyType))].sort();
}

export function getUniqueFuelTypes(): string[] {
  return [...new Set(vehicles.map((v) => v.fuelType))].sort();
}

export function getUniqueTransmissions(): string[] {
  return [...new Set(vehicles.map((v) => v.transmission))].sort();
}

export function filterVehicles(filters: Partial<FilterState>): Vehicle[] {
  let result = [...vehicles];

  if (filters.search) {
    const search = filters.search.toLowerCase();
    result = result.filter(
      (v) =>
        v.brand.toLowerCase().includes(search) ||
        v.model.toLowerCase().includes(search) ||
        v.description.toLowerCase().includes(search)
    );
  }

  if (filters.brand && filters.brand.length > 0) {
    result = result.filter((v) => filters.brand!.includes(v.brand));
  }

  if (filters.yearMin) {
    result = result.filter((v) => v.year >= filters.yearMin!);
  }

  if (filters.yearMax) {
    result = result.filter((v) => v.year <= filters.yearMax!);
  }

  if (filters.priceMin) {
    result = result.filter((v) => v.price >= filters.priceMin!);
  }

  if (filters.priceMax) {
    result = result.filter((v) => v.price <= filters.priceMax!);
  }

  if (filters.mileageMax) {
    result = result.filter((v) => v.mileage <= filters.mileageMax!);
  }

  if (filters.bodyType && filters.bodyType.length > 0) {
    result = result.filter((v) => filters.bodyType!.includes(v.bodyType));
  }

  if (filters.fuelType && filters.fuelType.length > 0) {
    result = result.filter((v) => filters.fuelType!.includes(v.fuelType));
  }

  if (filters.transmission && filters.transmission.length > 0) {
    result = result.filter((v) => filters.transmission!.includes(v.transmission));
  }

  return result;
}

export function sortVehicles(
  vehicleList: Vehicle[],
  sortBy: string
): Vehicle[] {
  const sorted = [...vehicleList];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'year-desc':
      return sorted.sort((a, b) => b.year - a.year);
    case 'year-asc':
      return sorted.sort((a, b) => a.year - b.year);
    case 'mileage-asc':
      return sorted.sort((a, b) => a.mileage - b.mileage);
    default:
      return sorted;
  }
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 4): Vehicle[] {
  return vehicles
    .filter(
      (v) =>
        v.id !== vehicle.id &&
        (v.bodyType === vehicle.bodyType || v.brand === vehicle.brand)
    )
    .slice(0, limit);
}

export function paginateVehicles(
  vehicleList: Vehicle[],
  page: number,
  perPage = 9
): { vehicles: Vehicle[]; totalPages: number; total: number } {
  const total = vehicleList.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  return {
    vehicles: vehicleList.slice(start, start + perPage),
    totalPages,
    total,
  };
}
