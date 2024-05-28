import { JWTAction } from "@/actions/ajwt/jwtaction";
import Aside from "@/components/ui/dash/siderbar/aside";
import React from "react";

const PanelLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await JWTAction();
  return (
    <>
      <Aside user={user}>{children}</Aside>
    </>
  );
};

export default PanelLayout;
