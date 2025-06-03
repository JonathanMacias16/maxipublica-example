import React, { useState } from "react";
import Image from "next/image";
import { ImageType } from "@/CarType";
import ModalGallery from "@/components/ModalGallery";
import MinGallery from "@/components/MinGallery";
import useIsMobile from "@/utils/useIsMobile";

const Gallery = ({ gallery }: { gallery: ImageType[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const maxVisible = isMobile ? 3 : 5;

  const handleNext = () => {
    if (!gallery) return;

    const newStart = startIndex + 1;
    setStartIndex(newStart > gallery.length - 1 ? 0 : newStart);
  };

  const handlePrev = () => {
    if (!gallery) return;

    const newStart = startIndex - 1;
    setStartIndex(newStart < 0 ? gallery.length - 1 : newStart);
  };

  const getVisibleImages = () => {
    if (!gallery) return [];

    const images = [];

    for (let i = 0; i < maxVisible; i++) {
      const index = (startIndex + i) % gallery.length;
      images.push(gallery[index]);
    }

    return images;
  };

  return (
    <div>
      <div
        className={"relative cursor-pointer select-none"}
        onClick={() => setModalOpen(true)}
      >
        <span
          className={
            "absolute top-0 right-0 bg-gray-500 text-white px-3 py-0.5 rounded-tr-lg rounded-bl-lg font-bold"
          }
        >
          {startIndex + 1}/{gallery.length}
        </span>
        <Image
          src={gallery?.[startIndex]?.url ?? "/404"}
          alt={"Car"}
          height={457}
          width={679}
          className={"rounded-lg shadow-lg w-full"}
        />
        {gallery?.[0]?.url && (
          <div className={"absolute bottom-7 right-6 flex gap-6 font-bold"}>
            <button
              className={
                "bg-white-dark/76 rounded-lg px-4 py-1 flex gap-2 justify-center align-middle"
              }
            >
              <Image
                src={"/video.svg"}
                alt={"360"}
                height={26.17}
                width={17.31}
              />
              Video
            </button>

            <button
              className={
                "bg-white-dark/76 rounded-lg px-4 py-1 flex gap-2 justify-center align-middle"
              }
            >
              <Image
                src={"/360.svg"}
                alt={"360"}
                height={26.17}
                width={17.31}
              />
              360°
            </button>
          </div>
        )}
      </div>
      <MinGallery
        handlePrev={handlePrev}
        handleNext={handleNext}
        getVisibleImages={getVisibleImages}
        gallery={gallery}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        arrows
        small
      />
      {modalOpen && (
        <ModalGallery
          handleNext={handleNext}
          gallery={gallery}
          startIndex={startIndex}
          getVisibleImages={getVisibleImages}
          setModalOpen={setModalOpen}
          handlePrev={handlePrev}
          setStartIndex={setStartIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
