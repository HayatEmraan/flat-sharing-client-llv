import { flatvue } from "@/assets";
import Image from "next/image";

interface ISingleFeedCard {
  id: number;
  title: string;
  date_posted: string;
  image: string;
  category: string;
  author: {
    name: string;
  };
  description: string;
}

const SingleFeedCardGrid = ({
  id,
  title,
  date_posted,
  image,
  category,
  author,
  description,
}: ISingleFeedCard) => {
  return (
    <div key={id} className="m-4 cursor-pointer">
      <img
        alt=""
        src={image}
        className="w-full rounded-2xl
           object-cover h-[200px]"
      />
      <h3 className="text-red-500 mt-3">{category}</h3>
      <h3 className="font-bold mt-3">{title}</h3>
      <h3 className="line-clamp-3 text-gray-400 mt-3">{description}</h3>
      <div className="flex items-center mt-5">
        <Image alt="logo" src={flatvue?.logo} className="w-[35px] rounded-full" />
        <div className="ml-2">
          <h3 className="font-bold text-[12px]">{author?.name}</h3>
          <h3 className="text-gray-500 text-[10px]">{date_posted}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleFeedCardGrid;
