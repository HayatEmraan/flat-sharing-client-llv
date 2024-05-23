"use client";

import FsForm from "@/components/shared/form/fsform";
import { useFormContext } from "react-hook-form";

const CmLogin = () => {
  const onSubmit = (data: any) => console.log(data);

  return (
    <FsForm onSubmit={onSubmit}>
      <CmLoginValues />
    </FsForm>
  );
};

const CmLoginValues = () => {
  const { register } = useFormContext();
  return (
    <>
      <input
        type="text"
        {...register("emailOrUsername")}
        placeholder="Email / Username"
        required
      />
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </>
  );
};

export default CmLogin;
