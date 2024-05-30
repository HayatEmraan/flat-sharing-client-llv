"use client";

import { useRouter } from "next/navigation";
import { Confirm } from "notiflix";
import { useEffect } from "react";

const Warning = () => {
  const router = useRouter();
  const handlePopUp = () => {
    Confirm.show(
      "Profile Info",
      "you've not completed your profile info, please complete your profile after you can have access this route",
      "{ gotta profile }",
      "{ I'll do later }",
      () => {
        router.push("/dash/settings");
      },
      () => {
        router.push("/");
      }
    );
  };
  useEffect(() => {
    handlePopUp();
  }, []);
  return <div></div>;
};

export default Warning;
