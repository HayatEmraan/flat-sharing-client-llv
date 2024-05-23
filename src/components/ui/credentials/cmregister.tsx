"use client";

import FsForm from "@/components/shared/form/fsform";
import { useFormContext } from "react-hook-form";

const CmRegister = () => {
  const onSubmit = (data: any) => console.log(data);

  return (
    <FsForm onSubmit={onSubmit}>
      <CmRegisterValues />
    </FsForm>
  );
};

const CmRegisterValues = () => {
  const { register, watch } = useFormContext();

  const [username, email] = watch(["username", "email"]);

  console.log(username);
  return (
    <>
      <div className="tooltip">
        <input
          type="text"
          {...register("username")}
          placeholder="Username"
          required
          pattern="^\S*$"
        />
        <span className="tooltip-text">No spaces allowed</span>
      </div>
      <input type="email" {...register("email")} placeholder="Email" required />
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        required
      />
      <input
        type="password"
        {...register("cPassword")}
        placeholder="Confirm Password"
        required
      />
      <button className="mb-8" type="submit">
        Sign Up
      </button>
    </>
  );
};

export default CmRegister;
