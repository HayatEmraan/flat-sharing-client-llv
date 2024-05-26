import { getCookie } from "@/actions/acookies/getcookie";
// import Navbar from "@/components/ui/header/navbar";
import HomeComp from "@/components/ui/homepage/homepage";

const Page = async () => {
  const response = await (
    await fetch("http://localhost:5000/api/flats", {
      method: "GET",
    })
  ).json();

  console.log(response);

  return (
    <div>
      {/* <Navbar /> */}
      <HomeComp flat={response} />
      {/* <h1>this is nothing</h1> */}
    </div>
  );
};

export default Page;
