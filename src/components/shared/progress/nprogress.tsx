"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="3px"
      color="#EC5840"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default NProgress;
