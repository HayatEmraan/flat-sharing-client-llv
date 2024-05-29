import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

interface ITestimonial {
  reviewText: string;
  name: string;
  image: string;
  role: string;
}

const TestimonialCard = ({ reviewText, name, image, role }: ITestimonial) => {
  return (
    <div className="card flex-1 basis-[16rem] relative">
      <div className="absolute opacity-10 text-9xl top-0 left-0">
        <FaQuoteRight />
      </div>
      <p>{reviewText}</p>
      <div className="mt-3 flex gap-x-3">
        <Image src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <h1 className="font-semibold capitalize">{name}</h1>
          <p className="text-sm capitalize">{role}</p>
          <div className="mt-3">
            {/* <ReactStars
              size={18}
              isHalf={true}
              activeColor="#ffd700"
              value={4.5}
              edit={false}
            /> */}
            <Rating
              initialValue={1}
              fillColor="#ffd700"
              iconsCount={1}
              readonly
              size={18}
            />
            <Rating
              initialValue={1}
              fillColor="#ffd700"
              iconsCount={1}
              readonly
              size={18}
            />
            <Rating
              initialValue={1}
              fillColor="#ffd700"
              iconsCount={1}
              readonly
              size={18}
            />
            <Rating
              initialValue={1}
              fillColor="#ffd700"
              iconsCount={1}
              readonly
              size={18}
            />
            <Rating
              initialValue={1}
              fillColor="#ffd700"
              iconsCount={1}
              readonly
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
