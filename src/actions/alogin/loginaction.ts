"use server";

import { ENV } from "@/config";
import { TLoginUser } from "@/interface";

export const LoginAction = async (payload: TLoginUser) => {
  return await (
    await fetch(ENV.backend_url + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify(payload),
    })
  ).json();
};
