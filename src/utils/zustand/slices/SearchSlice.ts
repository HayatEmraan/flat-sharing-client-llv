export const createSearchSlice = (set, get) => ({
  searchLocation: undefined,
  setSearchLocation: (location) => set({ searchLocation: location }),
  selectionType: undefined,
  dates: undefined,
  searchListings: [],
  setSearchListings: (searchListings) => set({ searchListings }),
  setSelectionType: (type) => set({ selectionType: type }),
  setDates: (dates) => set({ dates }),
});
