"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const JWTAction = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  return await jwtDecode(accessToken?.value as string);
};
