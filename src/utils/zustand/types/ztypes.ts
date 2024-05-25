// types.ts
export interface PlaceSpace {
  bathrooms: number;
  beds: number;
}

export interface AddressInfo {
  [key: string]: any;
}

interface locationType {
  name: string;
  svgPath: any;
}


interface placeType {
  title: string;
  subTitle: string;
  svg: any;
}

type TPlaceType = placeType | undefined;

interface locationData {
  locality: string;
  landmark: string;
  district: string;
  postcode: string;
  country: string;
}

type TLocationDataType = locationData | undefined;

interface searchPlaceSpace {
  area: number;
}

interface placeAmenities {
  image: string
  name: string
}

export interface ProcessSlice {
  locationType: locationType | undefined;
  setLocationType: (locationType: locationType | undefined) => void;
  placeType: TPlaceType;
  setPlaceType: (placeType: placeType) => void;
  locationData: TLocationDataType;
  setLocationData: (locationData: locationData) => void;
  placeSpace: PlaceSpace;
  setPlaceSpace: (placeSpace: PlaceSpace) => void;
  searchPlaceSpace: searchPlaceSpace;
  setSearchPlaceSpace: (searchPlaceSpace: searchPlaceSpace) => void;
  placeAmenities: placeAmenities[];
  setPlaceAmenities: (placeAmenities: placeAmenities[]) => void;
  photos: string[];
  setPhotos: (photos: string[]) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  price: number;
  setPrice: (price: number) => void;
  taxes: number;
  setTaxes: (taxes: number) => void;
  addressInfo: AddressInfo;
  setAddressInfo: (addressInfo: AddressInfo) => void;
  resetNewListingData: () => void;
}
