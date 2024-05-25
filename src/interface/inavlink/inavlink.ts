export interface SubLink {
  id: number;
  linkText: string;
  url: string;
}

export interface NavLink {
  id: number;
  linkText: string;
  url?: string;
  expand?: boolean;
  subLinks?: SubLink[];
}
