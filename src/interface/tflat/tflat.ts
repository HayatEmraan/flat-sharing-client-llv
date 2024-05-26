import { placeAmenities } from "@/utils/zustand/types/ztypes";

type TPlaceAmenity = {
  facilities: string[];
} & placeAmenities;

export interface TFlat {
  id: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  briefDescription: string;
  location: string;
  name: string;
  category: string;
  purpose: string;
  price: number;
  area: number;
  landmark: number;
  taxes?: number | null;
  images: string[];
  amenities: TPlaceAmenity[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
