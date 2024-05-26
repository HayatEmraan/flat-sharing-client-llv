import { placeAmenities } from "@/utils/zustand/types/ztypes";

export type TListing = {
  name: string;
  location: string;
  category: string | undefined;
  purpose: string | undefined;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  images: string[];
  briefDescription: string;
  price: number;
  taxes: number;
  amenities: placeAmenities[];
};
