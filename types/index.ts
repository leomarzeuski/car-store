export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  bodyType:
    | "sedan"
    | "suv"
    | "truck"
    | "coupe"
    | "hatchback"
    | "van"
    | "convertible";
  fuelType: "gasoline" | "diesel" | "electric" | "hybrid";
  transmission: "automatic" | "manual";
  engine: string;
  horsepower: number;
  doors: number;
  seats: number;
  drivetrain: "FWD" | "RWD" | "AWD" | "4WD";
  features: string[];
  images: string[];
  description: string;
  descriptionPt: string;
  descriptionEs?: string;
  isFeatured: boolean;
  condition: "new" | "used" | "certified";
  vin: string;
  exteriorColor: string;
  interiorColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  textPt: string;
  textEs?: string;
  rating: number;
  date: string;
  vehiclePurchased: string;
}

export interface FilterState {
  brand: string[];
  yearMin: number | null;
  yearMax: number | null;
  priceMin: number | null;
  priceMax: number | null;
  mileageMax: number | null;
  bodyType: string[];
  fuelType: string[];
  transmission: string[];
  search: string;
}

export type Locale = "en" | "pt" | "es";
