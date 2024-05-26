"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { TFlat } from "@/interface";

const ImagesCom = ({ data }: { data: TFlat }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="my-5">
      {isMobile ? (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data?.images?.map((singleImg, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: "100%",
                  height: "290px",
                  position: "relative",
                }}>
                <Image
                  src={singleImg}
                  fill
                  alt="Room Image"
                  style={{ objectFit: "cover" }}></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="relative">
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden rounded-lg w-full h-full relative">
              <Image
                src={data?.images[0]}
                alt="Image 0"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {data?.images?.slice(1, 5).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesCom;
