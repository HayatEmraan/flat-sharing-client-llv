import { BookingAction } from "@/actions/abooking/bookingaction";
import ReserveProperties from "@/components/ui/dash/reserve/reserveproperties";

const Page = async () => {
  const response = await BookingAction();
  return (
    <div>
      <ReserveProperties bookings={response} />
    </div>
  );
};

export default Page;
