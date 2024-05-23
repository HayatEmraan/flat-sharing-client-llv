"use client";

import { usernameAction } from "@/actions/aregister/usernameaction";
import FsForm from "@/components/shared/form/fsform";
import { KeyboardEvent, useState } from "react";
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

  const [mailError, setMailError] = useState<string>();
  const [usernameError, setUsernameError] = useState<string>();

  const [mailLoading, setMailLoading] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);

  function noSpaces(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  const checkingUserName = async (str: string) => {
    setUsernameLoading(true);
    const usernameExistOrNot = await usernameAction(str);
    if (usernameExistOrNot?.data?.status === 200) {
      setUsernameLoading(false);
      setUsernameError(`Congrats, ${username} is available`);
    } else if (str.length === 0) {
      setUsernameError("No spaces allowed");
    } else {
      setUsernameError(`${username} isn't available`);
    }
  };

  const checkingMail = async (str: string) => {
    setMailLoading(true);
    const usernameExistOrNot = await usernameAction(str);
    if (usernameExistOrNot?.data?.status === 200) {
      setUsernameLoading(false);
      setMailError("");
    } else {
      setMailError(`${email} already exist`);
    }
  };

  if (username) {
    // checkingUserName(username);
    console.log("something");
  }
  if (email) {
    checkingMail(email);
  }

  return (
    <>
      <div className="tooltip">
        <input
          type="text"
          {...register("username")}
          placeholder="Username"
          required
          pattern="^\S*$"
          onKeyDown={(event) => noSpaces(event)}
        />
        <span className="tooltip-text">
          {usernameError ? usernameError : "No spaces allowed"}
        </span>
      </div>
      <input
        type="email"
        {...register("email")}
        onKeyDown={(event) => noSpaces(event)}
        placeholder="Email"
        required
      />
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
