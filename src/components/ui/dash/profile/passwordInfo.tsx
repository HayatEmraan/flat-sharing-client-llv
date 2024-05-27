import { useState } from "react";

const PasswordInfo = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handlePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const currentPassword = (
      form.elements.namedItem("currentPassword") as HTMLInputElement
    ).value;
    const newPassword = (
      form.elements.namedItem("newPassword") as HTMLInputElement
    ).value;
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    ).value;

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
    }
    const payload = {
      oldPassword: currentPassword,
      newPassword: confirmPassword,
    };
    setSubmitting(false);
  };

  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold dark:text-white">
        Password information
      </h3>
      <form action="#" onSubmit={handlePassword}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username (not changeable)
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="emily"
              disabled
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="current-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Current password
            </label>
            <input
              type="text"
              name="currentPassword"
              id="current-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              New password
            </label>
            <input
              type="password"
              name="newPassword"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {passwordError ? (
                <span className="!text-red-600">Password not matched</span>
              ) : (
                "Confirm password"
              )}
            </label>
            <input
              type="text"
              name="confirmPassword"
              id="confirm-password"
              className={`shadow-sm ${
                passwordError ? "!border-red-400" : "border-gray-300"
              }  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              placeholder="••••••••"
              required
            />
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
  );
};

export default PasswordInfo;
