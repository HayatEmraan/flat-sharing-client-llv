"use server";

import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

type TPayload = {
  oldPassword: string;
  newPassword: string;
};

export const PasswordAction = async (payload: TPayload) => {
  return await (
    await fetch(ENV.backend_url + "/auth/change-password", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    })
  ).json();
};
