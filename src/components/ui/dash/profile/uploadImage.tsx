import { ImageAction } from "@/actions/aimg/imageaction";
import { ProfileAction } from "@/actions/aprofile/profileactions";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Confirm } from "notiflix";
import { useState } from "react";

const UploadImage = ({ photo }: { photo: string }) => {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const imageOnchange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string;
    const form = new FormData();
    if (event?.target?.files && event?.target?.files[0]) {
      form.append("file", event?.target?.files[0]);
      form.append("upload_preset", uploadPreset);
    }
    const image = await ImageAction(form);
    const photoURL = image?.secure_url;
    if (photoURL) {
      const uploadToDb = await ProfileAction({ photo: photoURL });
      if (uploadToDb?.success) {
        Confirm.show(
          "Congratulations 🎉",
          "you profile photo has been successfully updated, please allow sometime to effect action.",
          "{ Understood }",
          "{ Love you ❤️ }",
          () => {
            router.refresh();
          },
          () => {
            router.refresh();
          }
        );
      }
    } else {
      Confirm.show(
        "Oops, Something went wrong",
        "Error while updating your profile photo, please try again later!",
        "{ Back }",
        "Stay here",
        () => {},
        () => {}
      );
    }

    setUploading(false);
  };
  return (
    <div className="p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
        <Image
          className="mb-4 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
          src={`${photo ? photo : "/noavatar.png"}`}
          alt="Profile picture"
          width={90}
          height={90}
        />
        <div>
          <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
            Profile picture
          </h3>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="file"
                className="hidden"
                onChange={imageOnchange}
                name="photoIn"
                accept="image/*"
                id="photoInput"
              />
              <label
                htmlFor="photoInput"
                className="rounded-xl py-2 cursor-pointer transition">
                <span className="bg-[#003B95] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                  </svg>
                  {uploading ? "Uploading..." : "Upload Photo"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
