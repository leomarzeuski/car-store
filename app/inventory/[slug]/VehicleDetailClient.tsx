"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { formatPrice, formatMileage } from "@/lib/formatting";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/vehicle/ImageGallery";
import VehicleSpecs from "@/components/vehicle/VehicleSpecs";
import FinancingPreview from "@/components/vehicle/FinancingPreview";
import SimilarVehicles from "@/components/vehicle/SimilarVehicles";
import type { Vehicle } from "@/types";

const conditionVariant = {
  new: "success" as const,
  used: "default" as const,
  certified: "info" as const,
};

interface Props {
  vehicle: Vehicle;
}

export default function VehicleDetailClient({ vehicle }: Props) {
  const { locale, t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-primary via-primary-light to-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link
          href="/inventory"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary-light transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t("vehicle.backToInventory")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Gallery */}
          <div className="lg:col-span-3">
            <ImageGallery
              images={vehicle.images}
              alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
            />
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant={conditionVariant[vehicle.condition]}>
                  {t(`conditions.${vehicle.condition}`)}
                </Badge>
                <Badge variant="warning">
                  {t(`bodyTypes.${vehicle.bodyType}`)}
                </Badge>
                <Badge variant="info">
                  {t(`fuelTypes.${vehicle.fuelType}`)}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                {vehicle.year} {vehicle.brand} {vehicle.model}
              </h1>
            </div>

            {/* Price card */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-5">
              <p className="text-3xl md:text-4xl font-black text-primary">
                {formatPrice(vehicle.price, locale)}
              </p>
              <div className="flex gap-4 mt-3 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {formatMileage(vehicle.mileage, locale)}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {vehicle.horsepower} {t("common.hp")}
                </span>
                <span>{t(`transmissions.${vehicle.transmission}`)}</span>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              {locale === "pt"
                ? vehicle.descriptionPt
                : locale === "es" && vehicle.descriptionEs
                  ? vehicle.descriptionEs
                  : vehicle.description}
            </p>

            <div className="space-y-3">
              <Button
                href={`/schedule?vehicle=${vehicle.slug}`}
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-secondary-light text-white border-0 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all font-bold"
              >
                {t("vehicle.scheduleVisit")}
              </Button>
              <Button
                href="tel:+14075550123"
                variant="outline"
                size="lg"
                className="w-full"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {t("vehicle.callUs")}: (407) 555-0123
              </Button>
            </div>

            <FinancingPreview price={vehicle.price} slug={vehicle.slug} />
          </div>
        </div>

        {/* Specs */}
        <div className="mt-14">
          <VehicleSpecs vehicle={vehicle} />
        </div>

        {/* Similar Vehicles */}
        <SimilarVehicles vehicle={vehicle} />
      </div>
    </div>
  );
}
