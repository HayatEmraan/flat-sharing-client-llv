"use client";

import FsForm from "@/components/shared/form/fsform";
import FsInput from "@/components/shared/form/fsinput";

export default function Home() {
  const onSubmit = (data: any) => console.log(data);

  return (
    <FsForm onSubmit={onSubmit}>
      <FsInput></FsInput>
    </FsForm>
  );
}
