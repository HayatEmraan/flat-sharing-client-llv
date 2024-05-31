export type TNavAuth = {
  id: number;
  linkText: string;
  url: string;
};

const NavForAdmin = [
  {
    id: 11,
    linkText: "Users",
    url: "/dash/users",
  },
  {
    id: 12,
    linkText: "Bookings",
    url: "/dash/bookings",
  },
  {
    id: 13,
    linkText: "Properties",
    url: "/dash/properties",
  },
  {
    id: 14,
    linkText: "Booking (Reserve)",
    url: "/dash/reserve",
  },
  {
    id: 15,
    linkText: "Settings (Profile)",
    url: "/dash/settings",
  },
];

const NavForUser = [
  {
    id: 16,
    linkText: "My Bookings",
    url: "/dash/bookings",
  },
  {
    id: 17,
    linkText: "My Properties",
    url: "/dash/properties",
  },
  {
    id: 18,
    linkText: "Booking (Reserve)",
    url: "/dash/reserve",
  },
  {
    id: 19,
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
