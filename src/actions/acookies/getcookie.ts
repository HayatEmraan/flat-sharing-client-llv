"use server";

import { cookies } from "next/headers";

export const getCookie = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  return `${accessToken?.name}=${accessToken?.value}`;
};
