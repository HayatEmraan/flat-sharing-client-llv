"use server";

export const ImageAction = async (form: FormData) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const fetchURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  return await (
    await fetch(fetchURL, {
      method: "POST",
      cache: "no-store",
      body: form,
    })
  ).json();
};
