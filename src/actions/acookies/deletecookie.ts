"use server";
import { cookies } from "next/headers";

export const deleteCookies = async () => {
  const allCookies = cookies().getAll();
  allCookies?.forEach((key) => {
    cookies().delete(key);
  });
};
