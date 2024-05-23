"use server"

import { ENV } from "@/config";

export const usernameAction = async (str: string) => {
  return await (
    await fetch(ENV.backend_url + "/auth/check-username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify({
        username: str,
      }),
    })
  ).json();
};
