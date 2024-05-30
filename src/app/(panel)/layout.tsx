import { JWTAction } from "@/actions/ajwt/jwtaction";
import { getMe } from "@/actions/aprofile/profileactions";
import Aside from "@/components/ui/dash/siderbar/aside";
import React from "react";

const PanelLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await JWTAction();
  const me = await getMe()
  return (
    <>
      <Aside me={me} user={user}>{children}</Aside>
    </>
  );
};

export default PanelLayout;
