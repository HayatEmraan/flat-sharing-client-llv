import Aside from "@/components/ui/dash/siderbar/aside";
import React from "react";

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Aside>{children}</Aside>
    </>
  );
};

export default PanelLayout;
