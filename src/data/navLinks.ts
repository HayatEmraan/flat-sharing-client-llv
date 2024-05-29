export const navLinks = [
  {
    id: 1,
    linkText: "Home",
    url: "/",
  },
  {
    id: 2,
    linkText: "About Us",
    url: "#about-us",
  },
  {
    id: 4,
    linkText: "Property",
    url: "/property",
  },
  {
    id: 5,
    linkText: "Blog",
    url: "#blog",
  },
  {
    id: 7,
    linkText: "Portfolio",
  },
  {
    id: 8,
    linkText: "Profile",
    expand: true,
    subLinks: [
      {
        id: 1,
        linkText: "Sign In",
        url: "/auth/login",
      },
      {
        id: 2,
        linkText: "Sign Up",
        url: "/auth/register",
      },
    ],
  },
];
