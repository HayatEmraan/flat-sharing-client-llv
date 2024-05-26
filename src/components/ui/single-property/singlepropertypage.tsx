import { TFlat, TResponse } from "@/interface";
import DetailsFacilities from "./detailsfacilities";
import ImagesCom from "./imagescom";
import Header from "./propertyheader";
import SingleRoomDetails from "./singleroomdetails";

const RoomDetails = async ({ flat }: { flat: TResponse<TFlat> }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-6xl lg:mx-auto px-5 pt-2">
        {/* Header Section */}
        <Header data={flat?.data}></Header>
        {/* Grid  Images */}
        <ImagesCom data={flat?.data}></ImagesCom>
        {/* Details Sections */}
        <SingleRoomDetails data={flat?.data}></SingleRoomDetails>
        {/* Facilities */}
        <div className="my-5">
          <div className=" my-5">
            <h2 className="font-bold text-xl">
              Facilities of {flat?.data?.name}
            </h2>
          </div>
          {/* details Facilities */}
          <DetailsFacilities data={flat?.data}></DetailsFacilities>
          {/* House Rules */}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
