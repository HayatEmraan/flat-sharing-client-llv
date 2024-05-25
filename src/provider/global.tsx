"use client";

import { store } from "@/redux/store";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AnimatePresence>{children}</AnimatePresence>
    </Provider>
  );
};

export default GlobalProvider;
