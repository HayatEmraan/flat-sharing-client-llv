"use client";
import { LoginAction } from "@/actions/alogin/loginaction";
import FsForm from "@/components/shared/form/fsform";
import { TLoginUser } from "@/interface";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Report } from "notiflix/build/notiflix-report-aio";

const CmLogin = () => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    setSubmitLoading(true);

    const login = await LoginAction(data as TLoginUser);
    if (login?.statusCode === 200) {
      setSubmitLoading(false);
      Report.success(
        "{Sign In} Success",
        '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
        "{ Explore }",
        () => {
          router.push("/");
        }
      );
    } else {
      setSubmitLoading(false);
      Report.failure(
        "{Sign In} Failure",
        `${
          login?.message
            ? login?.message
            : '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford'
        }`,
        "{ Try, again }",
        () => {}
      );
    }
  };

  return (
    <FsForm onSubmit={onSubmit}>
      <CmLoginValues loading={submitLoading} />
    </FsForm>
  );
};

const CmLoginValues = ({ loading }: { loading: boolean }) => {
  const { register } = useFormContext();

  function noSpaces(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  return (
    <>
      <input
        type="text"
        {...register("emailOrUsername")}
        placeholder="Email / Username"
        onKeyDown={(event) => noSpaces(event)}
        required
      />
      <input
        type="password"
        {...register("password")}
        onKeyDown={(event) => noSpaces(event)}
        placeholder="Password"
        required
      />
      <button
        disabled={loading}
        className={`mb-8  ${loading && "!cursor-not-allowed"}`}
        type="submit">
        {loading ? "Loading." : "{ Sign In }"}
      </button>
    </>
  );
};

export default CmLogin;
