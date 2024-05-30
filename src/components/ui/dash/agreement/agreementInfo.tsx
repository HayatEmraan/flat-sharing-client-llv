import { TMe } from "@/interface/tme/tme";
import { Confirm } from "notiflix";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { addBooking } from "@/actions/abooking/bookingaction";

const AgreementInfo = ({ me, id }: { me: TMe; id: string }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const reserveInfo = await addBooking(id);
    if (reserveInfo?.success) {
      Confirm.show(
        "Congratulations 🎉",
        "your reserve has been successfully submitted, check you registered mail, you've got a mail from {Flatvue}.",
        "{ See Bookings }",
        "{ Back }",
        () => {
          router.push("/dash/bookings");
        },
        () => {
          router.back();
        }
      );
    } else {
      Confirm.show(
        "Oops, Something went wrong",
        "Error while reserve your booking, please try again later!",
        "{ Back }",
        "Stay here",
        () => {
          router.back();
        },
        () => {}
      );
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Personal information
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
                defaultValue={me?.bio as string}
                placeholder="more about yourself"
                required></textarea>
            </div>

            <div className="col-span-6 sm:col-full">
              <FormGroup>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="the authority reserves the right to accept or cancel your reservation request."
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="you'll receive a confirmation when your reservation request has any updates."
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="by submitting a reservation request, you agree to our terms and conditions."
                />
              </FormGroup>
            </div>

            <div className="col-span-6 sm:col-full">
              <button
                className="bg-[#003B95]   text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit">
                {submitting ? "Submitting..." : "Reserve Now"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgreementInfo;
