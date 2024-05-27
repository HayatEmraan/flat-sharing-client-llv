import { ProfileAction } from "@/actions/aprofile/profileactions";
import { TMe } from "@/interface/tme/tme";
import { Confirm } from "notiflix";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GeneralInfo = ({ me }: { me: TMe }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    if (data) {
      const updateInfo = await ProfileAction(data);
      if (updateInfo.success) {
        Confirm.show(
          "Congratulations 🎉",
          "you profile has been successfully updated, please allow sometime to effect action.",
          "{ Understood }",
          "{ Love you ❤️ }",
          () => {
            router.refresh();
          },
          () => {
            router.refresh();
          }
        );
      } else {
        Confirm.show(
          "Oops, Something went wrong",
          "Error while updating your profile, please try again later!",
          "{ Back }",
          "Stay here",
          () => {},
          () => {}
        );
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="col-span-2">
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          General information
        </h3>
        {/* onSubmit={handleSaveAll} */}
        <form action="#" onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={me?.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Bonnie"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="profession"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                defaultValue={me?.profession as string}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="L2 Developer"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={me?.address}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g. California"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={me?.email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="example@company.com"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bio
              </label>
              <textarea
                name="bio"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="bio"
                rows={5}
                defaultValue={me?.bio as string}
                placeholder="more about yourself"
                required></textarea>
            </div>

            <div className="col-span-6 sm:col-full">
              <button
                className="bg-[#003B95]   text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit">
                {submitting ? "Submitting..." : "Save all"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfo;
