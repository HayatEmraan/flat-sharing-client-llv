"use server";
import { cookies } from "next/headers";

export const setAccessToken = (name: string, token: string) => {
  cookies().set(name, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 2 * 60 * 60 * 1000,
  });
};
