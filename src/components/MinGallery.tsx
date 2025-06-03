import React from "react";
import ArrowSvg from "@/assets/ArrowSvg";
import Image from "next/image";
import { ImageType } from "@/CarType";

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  getVisibleImages: () => { url: string }[];
  gallery: ImageType[];
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  arrows?: boolean;
  small?: boolean;
}

const MinGallery = ({
  handlePrev,
  handleNext,
  getVisibleImages,
  startIndex,
  setStartIndex,
  gallery,
  arrows,
  small,
}: Props) => {
  return (
    <div className={"flex gap-3 justify-center items-center mt-4"}>
      <ArrowSvg
        className={`cursor-pointer ${!arrows && "hidden"}`}
        onClick={handlePrev}
      />

      {getVisibleImages().map((item, index) => (
        <Image
          key={index}
          src={item.url}
          alt={"Car"}
          height={small ? 86.68 : 173.36}
          width={small ? 73.41 : 146.82}
          className={`rounded-lg select-none cursor-pointer hover:scale-115 duration-300 ease-in-out ${
            (startIndex + index) % gallery.length === startIndex
              ? "border-orange border-2"
              : ""
          } border-gray-200 border`}
          onClick={() => setStartIndex((startIndex + index) % gallery.length)}
        />
      ))}

      <ArrowSvg
        className={`rotate-180 cursor-pointer ${!arrows && "hidden"}`}
        onClick={handleNext}
      />
    </div>
  );
};

export default MinGallery;
