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

const Aside = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex gap-12">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Users"
            active
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Profile" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        {children}
      </div>
    </>
  );
};

export default Aside;
