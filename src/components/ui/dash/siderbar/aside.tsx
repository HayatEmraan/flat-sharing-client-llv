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
import { UserRole } from "@/constant/user.role";
import Logout from "./logout";

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

const userSideBarItems = [
  {
    text: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    text: "My Bookings",
    icon: <StickyNote size={20} />,
    path: "/dash/bookings",
  },
  {
    text: "My Properties",
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
  user: userSideBarItems,
};

const Aside = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: IUserInfo;
}) => {
  const admin = sideBarItems?.admin;
  const userGlobe = sideBarItems?.user;
  const sideBar = user?.role === UserRole?.admin ? admin : userGlobe;

  return (
    <>
      <div className="flex gap-12">
        <Sidebar>
          {sideBar?.map((sideItem) => {
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
          {user?.role === UserRole?.user && (
            <SidebarItem
              icon={<Settings size={20} />}
              text="Listing (Property)"
              path="/listing"
            />
          )}
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            path="/dash/settings"
          />
          <Logout />
        </Sidebar>
        {children}
      </div>
    </>
  );
};

export default Aside;
