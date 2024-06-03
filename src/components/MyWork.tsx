import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchWorks } from "../features/works";
import { useEffect, useState } from "react";
import previous from "../assets/Previous.svg";
import next from "../assets/Next.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MyWork() {
  const disptach = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.works
  );

  useEffect(() => {
    disptach(fetchWorks());
  }, [disptach]);

  const responsive = {
    tablet: {
      breakpoint: { max: 4000, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="MyWork" className="mt-16">
      <div className="flex flex-row justify-center lg:justify-start items-center mb-4">
        <h3 className="mr-2 text-[20px] lg:text-[26px] font-medium">My Work</h3>
        <hr className="w-2 h-2 border-2 rounded-full bg-[#F24CEB] border-[#252424]" />
      </div>
      {data.length > 0 && (
        <Carousel
          className="flex justify-between items-center py-4"
          responsive={responsive}
          infinite={true}
          swipeable={true}
        >
          <div className="flex flex-col items-center justify-center mr-8">
            <img className="mb-6" src={`/images/${data[0].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[0].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[0].description}
            </p>
            <button className="py-3 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160]">
              See More
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mr-8">
            <img className="mb-6" src={`/images/${data[1].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[1].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[1].description}
            </p>
            <button className="py-3 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160]">
              See More
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mr-8">
            <img className="mb-6" src={`/images/${data[2].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[2].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[2].description}
            </p>
            <button className="py-3 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160]">
              See More
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mr-8">
            <img className="mb-6" src={`/images/${data[3].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[3].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[3].description}
            </p>
            <button className="py-3 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160]">
              See More
            </button>
          </div>
        </Carousel>
      )}
    </div>
  );
}
