import { BookingByAction } from "@/actions/abooking/bookingaction";
import BookingInfo from "@/components/ui/dash/bookingInfo/bookingInfo";

const Page = async () => {
  const response = await BookingByAction();
  return (
    <div>
      <BookingInfo bookings={response} />
    </div>
  );
};

export default Page;
