import { create } from "zustand";
export const toggleStore = create((set) => ({
  isToggled: false,
  setIsToggled: (value) => set({ isToggled: value }),
}));
