import { create } from "zustand";
import { createProcessSlice } from "./slices/ProcessSlice";
import { ProcessSlice } from "./types/ztypes";

export const userAppStore = create<ProcessSlice>()((...a) => ({
  ...createProcessSlice(...a),
}));
