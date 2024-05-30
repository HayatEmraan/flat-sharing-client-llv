import { getMyProfile } from "@/actions/aprofile/profileactions";
import Warning from "@/components/shared/warning/warning";
import FlatListing from "@/components/ui/flat-listing/flatListing";

const Page = async () => {
  const myProfile = await getMyProfile();
  return (
    <>
      {myProfile ? (
        <>
          <FlatListing />
        </>
      ) : (
        <Warning />
      )}
    </>
  );
};

export default Page;
