import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchWorks } from "../features/works";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@mui/material";
import WorkModal from "./WorkModal";
import { createPortal } from "react-dom";
import { AppDispatch } from "../store";

export default function MyWork() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.works);
  const [openModal, setOpenModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

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

  const isMobile = useMediaQuery("(max-width:464px)");

  return (
    <div id="MyWork" className="mt-16 mb-16 text-[#252424]">
      <div className="flex flex-row justify-center lg:justify-start items-center mb-8 lg:mb-16">
        <h3 className="mr-2 text-[20px] lg:text-[26px] font-medium">Projets</h3>
        <hr className="w-2 h-2 border-2 rounded-full bg-[#F24CEB] border-[#252424]" />
      </div>
      {data.length > 0 && (
        <Carousel
          className="flex justify-between items-center py-4 z-0"
          responsive={responsive}
          infinite={true}
          swipeable={true}
          arrows={!isMobile}
        >
          <div className="flex flex-col items-center justify-center md:mr-8">
            <img className="mb-6" src={`/images/${data[0].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[0].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[0].description}
            </p>
            <button
              onClick={() => {
                setItemIndex(0);
                setOpenModal(!openModal);
              }}
              className="py-2 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-medium shadow-md shadow-[#22283160] hover:shadow-transparent"
            >
              Voir plus
            </button>
          </div>

          <div className="flex flex-col items-center justify-center md:mr-8">
            <img className="mb-6" src={`/images/${data[1].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[1].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[1].description}
            </p>
            <button
              onClick={() => {
                setItemIndex(1);
                setOpenModal(!openModal);
              }}
              className="py-2 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-medium shadow-md shadow-[#22283160] hover:shadow-transparent"
            >
              Voir plus
            </button>
          </div>

          <div className="flex flex-col items-center justify-center md:mr-8">
            <img className="mb-6" src={`/images/${data[2].image}.svg`} alt="" />
            <h3 className="font-Syne text-[18px] lg:text-[26px] font-medium mb-4">
              {data[2].name}
            </h3>
            <p className="text-[20px] mb-4 text-center">
              {data[2].description}
            </p>
            <button
              onClick={() => {
                setItemIndex(2);
                setOpenModal(!openModal);
              }}
              className="py-2 w-[100px] lg:w-[160px] border rounded-full border-[#222831] font-medium shadow-md shadow-[#22283160] hover:shadow-transparent"
            >
              Voir plus
            </button>
          </div>
        </Carousel>
      )}
      {openModal &&
        createPortal(
          <WorkModal
            onClose={() => setOpenModal(!openModal)}
            data={data[itemIndex]}
          />,
          document.body
        )}
    </div>
  );
}
