"use server";

import { ENV } from "@/config";

export const MailerAction = async (mail: string) => {
  return await (
    await fetch(ENV.backend_url + "/auth/confirm-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify({
        email: mail,
      }),
    })
  ).json();
};
