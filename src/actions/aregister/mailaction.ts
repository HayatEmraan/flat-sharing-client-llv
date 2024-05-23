"use server";

import { ENV } from "@/config";

export const mailAction = async (str: string) => {
  return await (
    await fetch(ENV.backend_url + "/auth/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify({
        email: str,
      }),
    })
  ).json();
};
