import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { IUserInfo } from "@/interface";
import { JwtPayload } from "jwt-decode";

const adminSideBarItems = [
  {
    text: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    text: "Users",
    icon: <LayoutDashboard size={20} />,
    path: "/dash/users",
  },
  {
    text: "Bookings",
    icon: <StickyNote size={20} />,
    path: "/dash/bookings",
  },
  {
    text: "Properties",
    icon: <Calendar size={20} />,
    path: "/dash/properties",
  },
  {
    text: "Booking (Reserve)",
    icon: <Layers size={20} />,
    path: "/dash/reserve",
  },
];
const sideBarItems = {
  admin: adminSideBarItems,
};

const Aside = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: JwtPayload;
}) => {
  return (
    <>
      <div className="flex gap-12">
        <Sidebar>
          {/* <SidebarItem icon={<Home size={20} />} text="Home" alert path="/" />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Users"
            active
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Bookings" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Properties" />
          <SidebarItem icon={<Layers size={20} />} text="Booking (Reserve)" /> */}

          {sideBarItems?.admin?.map((sideItem) => {
            return (
              <SidebarItem
                key={sideItem.text}
                icon={sideItem.icon}
                text={sideItem.text}
                path={sideItem.path}
              />
            );
          })}

          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            path="/dash/settings"
          />
          {/* <SidebarItem icon={<LifeBuoy size={20} />} text="Logout" /> */}
        </Sidebar>
        {children}
      </div>
    </>
  );
};

export default Aside;
