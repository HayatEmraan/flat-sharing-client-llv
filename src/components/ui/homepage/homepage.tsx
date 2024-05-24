"use client";
import Filters from "./utils/filters";
import Hero from "./utils/hero";
import Invest from "./utils/invest";
import Speciality from "./utils/speciality";
import Featured from "@/components/shared/common/featured";
import Counter from "@/components/shared/common/counter";
import Projects from "@/components/shared/common/projects";
import Testimonial from "@/components/shared/common/testimonial";
import Brands from "@/components/shared/common/brands";
import Feeds from "./utils/feeds";

const HomeComp = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Invest />
      <Speciality />
      <Featured />
      <Counter />
      <Projects />
      <Testimonial />
      <Brands />
      <Feeds />
    </div>
  );
};

export default HomeComp;
