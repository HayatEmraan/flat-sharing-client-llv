export type TNavAuth = {
  id: number;
  linkText: string;
  url: string;
};

const NavForAdmin = [
  {
    id: 1,
    linkText: "Users",
    url: "/dash/users",
  },
  {
    id: 2,
    linkText: "Bookings",
    url: "/dash/bookings",
  },
  {
    id: 3,
    linkText: "Properties",
    url: "/dash/properties",
  },
  {
    id: 4,
    linkText: "Booking (Reserve)",
    url: "/dash/reserve",
  },
  {
    id: 5,
    linkText: "Settings (Profile)",
    url: "/dash/settings",
  },
];

const NavForUser = [
  {
    id: 1,
    linkText: "My Bookings",
    url: "/dash/bookings",
  },
  {
    id: 2,
    linkText: "My Properties",
    url: "/dash/properties",
  },
  {
    id: 3,
    linkText: "Booking (Reserve)",
    url: "/dash/reserve",
  },
  {
    id: 3,
    linkText: "Settings (Profile)",
    url: "/dash/settings",
  },
];

export const NavForAuth: {
  admin: TNavAuth[];
  user: TNavAuth[];
} = {
  admin: NavForAdmin,
  user: NavForUser,
};
