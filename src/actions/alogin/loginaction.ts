"use server";

import { ENV } from "@/config";
import { TLoginUser } from "@/interface";
import { setAccessToken } from "../acookies/setcookie";

export const LoginAction = async (payload: TLoginUser) => {
  const result = await (
    await fetch(ENV.backend_url + "/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    })
  ).json();

  if (result?.success) {
    setAccessToken("accessToken", result?.data?.accessToken);
  }

  return result;
};
