"use client";

import { mailAction } from "@/actions/aregister/mailaction";
import { RegisterAction } from "@/actions/aregister/registeraction";
import { usernameAction } from "@/actions/aregister/usernameaction";
import FsForm from "@/components/shared/form/fsform";
import { TRegisterUser } from "@/interface";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { useRouter } from "next/navigation";
import { MailerAction } from "@/actions/aregister/mailercodeaction";

const CmRegister = () => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    setSubmitLoading(true);
    delete data.code;
    delete data.cPassword;
    const register = await RegisterAction(data as TRegisterUser);
    if (register?.statusCode === 200) {
      setSubmitLoading(false);
      Confirm.show(
        "Congratulations 🎉",
        "Your account successfully created, please check your mail.",
        "{ Sign In }",
        "Stay here",
        () => {
          router.push("/auth/login");
        },
        () => {}
      );
    } else {
      setSubmitLoading(false);
      Confirm.show(
        "Oops, Something went wrong",
        "Error while opening an Account, please try again later!",
        "{ Back }",
        "Stay here",
        () => {
          router.push("/");
        },
        () => {}
      );
    }
  };

  return (
    <FsForm onSubmit={onSubmit}>
      <CmRegisterValues loading={submitLoading} />
    </FsForm>
  );
};

const CmRegisterValues = ({ loading }: { loading: boolean }) => {
  const { register, watch } = useFormContext();

  const [password] = watch(["password"]);

  const [mailError, setMailError] = useState<string>();
  const [usernameError, setUsernameError] = useState<string>();

  const [matchPassword, setMatchPassword] = useState<string>();
  const [isValidMail, setIsValidMail] = useState<boolean>(false);

  const [mail, setMail] = useState<string>();
  const [mailSend, setMailSend] = useState<boolean>(false);
  const [mailCode, setMailCode] = useState<number>();
  const [mailCodeCheck, setMailCodeCheck] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  function noSpaces(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  const checkingUserName = async (str: string) => {
    setUsernameError(`available checking...`);
    if (str?.length === 0) {
      setError(true);
      return setUsernameError("No spaces allowed");
    }

    const usernameExistOrNot = await usernameAction(str);

    if (usernameExistOrNot?.statusCode === 200) {
      setError(false);
      setUsernameError("");
    } else {
      setUsernameError(`oops! username not available`);
      setError(true);
    }
  };

  const checkingMail = async (str: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (str?.length === 0) {
      return setMailError("");
    }
    if (!emailPattern.test(str)) {
      setIsValidMail(false);
      return setMailError("oops! mail isn't valid");
    }

    const mailExistOrNot = await mailAction(str);
    if (mailExistOrNot?.statusCode === 200) {
      setError(false);
      setIsValidMail(true);
      setMailError("");
      setMail(str);
    } else if (!mailExistOrNot?.success) {
      setError(true);
      setIsValidMail(false);
      setMailError(`oops! mail already exist`);
    }
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    checkingUserName(e.target.value);
  };
  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    checkingMail(e.target.value);
  };

  const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const cPassword = e.target?.value;
    if (cPassword && password) {
      if (cPassword === password) {
        setError(false);
        setMatchPassword("");
      } else {
        setError(true);
        setMatchPassword("password not match");
      }
    }
  };

  const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.value?.length === 0) {
      return setMailCodeCheck(true);
    }
    if (Number(e.target?.value) === mailCode) {
      setMailCodeCheck(true);
    } else {
      setMailCodeCheck(false);
    }
  };

  const sendMailCode = async () => {
    const sendMailResponse = await MailerAction(mail as string);
    if (sendMailResponse?.success) {
      Confirm.show(
        "Congratulations 🎉",
        "Email code send successful, please check your inbox or spam folder.",
        "{ Understood }",
        "{ Love you ❤️ }",
        () => {},
        () => {}
      );

      setMailCode(sendMailResponse?.data?.code);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          {...register("username")}
          placeholder="Username"
          required
          pattern="^\S*$"
          className={usernameError && "!ring-2 ring-red-700"}
          onKeyDown={(event) => noSpaces(event)}
          onBlur={(e) => onChangeUsername(e)}
        />
        <span className="text-sm text-red-700">
          {usernameError && usernameError}
        </span>
      </div>

      <div className={`relative ${mailSend && "!hidden"}`}>
        <input
          type="email"
          {...register("email")}
          onKeyDown={(event) => noSpaces(event)}
          placeholder="Email"
          className={mailError && "!ring-2 ring-red-700"}
          required
          onBlur={(e) => onChangeMail(e)}
        />
        <span className="text-sm text-red-700">{mailError && mailError}</span>
        {isValidMail && (
          <span
            onClick={() => {
              setMailSend(true);
              sendMailCode();
            }}
            className="absolute right-1 top-1/4 -translate-y-0.5 text-white hover:text-slate-900 cursor-pointer border bg-purple-400 p-1 rounded-lg">
            send code
          </span>
        )}
      </div>
      <div className={`${!mailSend && "!hidden"}`}>
        <input
          type="text"
          {...register("code")}
          placeholder="Enter Code"
          required
          pattern="^\S*$"
          className={!mailCodeCheck ? "!ring-2 ring-red-700" : ""}
          onKeyDown={(event) => noSpaces(event)}
          onChange={(e) => onChangeCode(e)}
        />
      </div>
      <input
        type="password"
        {...register("password")}
        onKeyDown={(event) => noSpaces(event)}
        placeholder="Password"
        required
      />

      <div>
        <input
          type="password"
          {...register("cPassword")}
          placeholder="Confirm Password"
          onKeyDown={(event) => noSpaces(event)}
          required
          className={matchPassword && "!outline !outline-red-400 !outline-1"}
          disabled={!password}
          onChange={(e) => onChangeConfirmPassword(e)}
        />
      </div>
      <button
        disabled={loading || error || !password}
        className={`mb-8  ${
          loading || error || (!password && "!cursor-not-allowed")
        }`}
        type="submit">
        {loading ? "Loading." : "{ Sign Up }"}
      </button>
    </>
  );
};

export default CmRegister;
