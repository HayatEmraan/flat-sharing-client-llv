"use server";

import { redirect } from "next/navigation";

export const routeRedirect = async (basePath: string, link: string) => {
  const path = basePath + link;
  redirect(path);
};
