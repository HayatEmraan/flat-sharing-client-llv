// "use client";

import { getCookie } from "@/actions/acookies/getcookie";
import Navbar from "@/components/ui/header/navbar";
import HomeComp from "@/components/ui/homepage/homepage";


// import FsForm from "@/components/shared/form/fsform";
// import FsInput from "@/components/shared/form/fsinput";

// export default function Home() {
//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <FsForm onSubmit={onSubmit}>
//       <FsInput></FsInput>
//     </FsForm>
//   );
// }

const Page = async () => {
  const response = await (
    await fetch("http://localhost:5000/api", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: await getCookie(),
      },
    })
  ).json();

  // console.log(response);
  return (
    <div>
      {/* <Navbar /> */}
      <HomeComp />
      {/* <h1>this is nothing</h1> */}
    </div>
  );
};

export default Page;
