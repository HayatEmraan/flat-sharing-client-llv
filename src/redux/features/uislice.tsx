import { navLinks } from "@/data/navLinks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownOpen: false,
  position: null,
  currentLink: {},
  isSidebarOpen: false,
  isFilterMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openDropdown: (state, action) => {
      const mainLink = action.payload.link;
      state.currentLink = navLinks.find((link) => link.linkText === mainLink);
      state.isDropdownOpen = true;
      state.position = action.payload.center;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },

    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openFilterMenu: (state) => {
      state.isFilterMenuOpen = true;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuOpen = false;
    },
  },
});

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openFilterMenu,
  closeFilterMenu,
} = uiSlice.actions;

export default uiSlice.reducer;
