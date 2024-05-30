import { getFlats } from "@/actions/aflats/flatactions";
import { JWTAction } from "@/actions/ajwt/jwtaction";
import { MyProperties } from "@/actions/aproperties/propertiesaction";
import Properties from "@/components/ui/dash/properties/Properties";
import { UserRole } from "@/constant/user.role";

const Page = async () => {
  const me = await JWTAction();
  const flats = await getFlats();
  const properties = await MyProperties();
  const response = me?.role === UserRole.user ? properties : flats;

  return (
    <div>
      <Properties properties={response} />
    </div>
  );
};

export default Page;
