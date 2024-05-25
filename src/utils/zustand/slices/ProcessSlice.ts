import { StateCreator } from "zustand";
import { ProcessSlice } from "../types/ztypes";

export const createProcessSlice: StateCreator<ProcessSlice> = (set, get) => ({
  resetNewListingData: () =>
    set({
      locationType: undefined,
      placeType: undefined,
      locationData: undefined,
      placeSpace: { bathrooms: 1, beds: 1 },
      searchPlaceSpace: {
        area: 75,
      },
      placeAmenities: [],
      photos: [],
      title: "",
      description: "",
      price: 0,
    }),
  locationType: undefined,
  setLocationType: (locationType) => set({ locationType }),
  placeType: undefined,
  setPlaceType: (placeType) => set({ placeType }),
  locationData: undefined,
  setLocationData: (locationData) => set({ locationData }),
  searchPlaceSpace: { area: 75 },
  setSearchPlaceSpace: (searchPlaceSpace) => set({ searchPlaceSpace }),
  placeSpace: { bathrooms: 1, beds: 1 },
  setPlaceSpace: (placeSpace) => set({ placeSpace }),
  placeAmenities: [],
  setPlaceAmenities: (placeAmenities) => set({ placeAmenities }),
  photos: [],
  setPhotos: (photos) => set({ photos }),
  title: "",
  setTitle: (title: string) => set({ title }),
  description: "",
  setDescription: (description: string) => set({ description }),
  price: 0,
  setPrice: (price: number) => set({ price }),
  taxes: 0,
  setTaxes: (taxes: number) => set({ taxes }),
  addressInfo: {},
  setAddressInfo: (addressInfo) => set({ addressInfo }),
});
