import React, { useEffect } from "react";
import CloseSvg from "@/assets/CloseSvg";
import ArrowSvg from "@/assets/ArrowSvg";
import Image from "next/image";
import MinGallery from "@/components/MinGallery";
import { ImageType } from "@/CarType";
import useIsMobile from "@/utils/useIsMobile";

interface Props {
  handleNext: () => void;
  handlePrev: () => void;
  gallery: ImageType[];
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  getVisibleImages: () => { url: string }[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalGallery = ({
  handleNext,
  handlePrev,
  gallery,
  startIndex,
  setStartIndex,
  getVisibleImages,
  setModalOpen,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const isMobile = useIsMobile();

  return (
    <div
      className={
        "h-screen w-full bg-black/90 fixed z-10 top-0 bottom-0 left-0 right-0 grid place-items-center"
      }
    >
      <div className={"relative"}>
        <div
          className={
            "absolute md:left-22 left-6 -top-14 text-white font-bold text-lg"
          }
        >
          <span>
            {startIndex + 1}
            {" / "}
            {gallery.length}
          </span>
        </div>
        <CloseSvg
          className={"absolute md:right-22 right-6 -top-14 cursor-pointer"}
          onClick={() => setModalOpen(false)}
        />
        <div className={"flex justify-center items-center lg:gap-10 gap-1"}>
          <span
            className={
              "bg-white lg:size-12 size-6 grid place-items-center rounded-full cursor-pointer"
            }
            onClick={handleNext}
          >
            <ArrowSvg className={"w-2"} />
          </span>
          <Image
            src={gallery?.[startIndex]?.url ?? "/404"}
            alt={"Car"}
            height={1290}
            width={769.09}
            className={"rounded-lg shadow-lg select-none max-w-5/6"}
          />
          <span
            className={
              "bg-white lg:size-12 size-6 grid place-items-center rounded-full cursor-pointer"
            }
            onClick={handleNext}
          >
            <ArrowSvg className={"rotate-180 w-2"} />
          </span>
        </div>
        <MinGallery
          handlePrev={handlePrev}
          handleNext={handleNext}
          getVisibleImages={getVisibleImages}
          gallery={gallery}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          small={isMobile}
        />
      </div>
    </div>
  );
};

export default ModalGallery;
