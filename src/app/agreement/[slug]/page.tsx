import { getMe, getMyProfile } from "@/actions/aprofile/profileactions";
import Warning from "@/components/shared/warning/warning";
import Agreement from "@/components/ui/dash/agreement/agreement";

type TParams = {
  params: {
    [key: string]: any;
  };
};

const Page = async ({ params }: TParams) => {
  const slug = params?.slug;
  const me = await getMe();
  const myProfile = await getMyProfile();
  return (
    <>
      {myProfile ? (
        <>
          <div className="flex items-center justify-center max-w-[44rem] mx-auto">
            <Agreement me={me} id={slug} />
          </div>
        </>
      ) : (
        <Warning />
      )}
    </>
  );
};

export default Page;
