import { getMe } from "@/actions/aprofile/profileactions";
import Setting from "@/components/ui/dash/profile/Setting";

const Page = async () => {
  const me = await getMe()
  return (
    <div>
      <Setting me={me} />
    </div>
  );
};

export default Page;
