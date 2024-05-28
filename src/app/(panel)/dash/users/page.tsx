import { UserAction } from "@/actions/auser/useractions";
import Users from "@/components/ui/dash/admin/users/Users";

const Page = async () => {
  const users = await UserAction();
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default Page;
