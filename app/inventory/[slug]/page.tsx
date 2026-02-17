import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllVehicles, getVehicleBySlug } from '@/lib/vehicles';
import VehicleDetailClient from './VehicleDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const vehicles = getAllVehicles();
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: 'Vehicle Not Found' };

  return {
    title: `${vehicle.year} ${vehicle.brand} ${vehicle.model}`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.year} ${vehicle.brand} ${vehicle.model} | Car Warriors LLC`,
      description: vehicle.description,
      images: [vehicle.images[0]],
    },
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}
