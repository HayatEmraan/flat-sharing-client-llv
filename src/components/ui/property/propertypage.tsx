"use client";

import CTA from "@/components/shared/common/pagecomponent/cta";
import Pagination from "@/components/shared/common/pagecomponent/pagination";
import PropertyFullWidth from "@/components/shared/common/pagecomponent/propertyfullwidth";
import PropertyList from "@/components/shared/common/pagecomponent/propertylist";
import AdvancedSearch from "@/components/shared/common/propertyfilters/advancedsearch";
import HeadeFilters from "@/components/shared/common/propertyfilters/headefilters";
import PriceRange from "@/components/shared/common/propertyfilters/pricerange";
import Type from "@/components/shared/common/propertyfilters/type";
import { property } from "@/data/dummyData";
import { closeFilterMenu } from "@/redux/features/uislice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";

const PropertyPage = () => {
  const { isFilterMenuOpen } = useAppSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal")) {
      dispatch(closeFilterMenu());
    }
  };

  const [layout, setLayout] = useState("grid");

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeadeFilters layout={layout} setLayout={setLayout} />
      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={8} pageData={property} />
        </div>
        <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}>
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex-center-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}>
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch />
              <Type />
              <PriceRange />
              {/* <SocialIcons /> */}
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
