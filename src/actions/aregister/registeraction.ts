"use server";

import { ENV } from "@/config";
import { TRegisterUser } from "@/interface";

export const RegisterAction = async (payload: TRegisterUser) => {
  return await (
    await fetch(ENV.backend_url + "/auth/register", {
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
