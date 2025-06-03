import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import { CarType, ImageType } from "@/CarType";
import { getAttributeById } from "@/utils/getAttributeById";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCar from "@/components/InfoCar";
import LoadSvg from "@/assets/LoadSvg";

const Index = () => {
  const [data, setData] = useState<CarType>();
  const [viewMore, setViewMore] = useState(false);
  const [gallery, setGallery] = useState<ImageType[]>();
  const [loading, setLoading] = useState(false);

  const attribute = (attr: string) => {
    return getAttributeById(data?.attributes || [], attr);
  };

  const load = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://beta.maxipublica.com/testing/ads/20902517",
      );
      setData(response.data);
      setGallery(response.data.images);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load().catch();
  }, []);
  return (
    <>
      {data && !loading ? (
        <>
          <Nav />
          <section className={"flex justify-center md:mt-10 md:mb-40 mb-5"}>
            <div
              className={
                "max-w-7xl mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-14 content-start"
              }
            >
              <div className={"lg:col-span-8 w-full grid gap-2"}>
                <BreadCrumb data={data} />
                <div>
                  <Gallery gallery={gallery ?? []} />
                  <div className={"mt-14 max-w-2xl"}>
                    <h1 className={"text-lg font-bold mb-4 select-none"}>
                      {attribute("descriptionAut")?.label}
                    </h1>
                    <p
                      className={`text-sm mb-4 ${!viewMore && "line-clamp-6"}`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {attribute("descriptionAut")?.value}
                    </p>
                    <span
                      className={
                        "text-orange underline underline-orange font-bold cursor-pointer"
                      }
                      onClick={() => setViewMore(!viewMore)}
                    >
                      {viewMore ? "Ver menos" : "Ver más"}
                    </span>
                  </div>
                </div>
              </div>
              {/* INFO */}
              <InfoCar data={data} />
            </div>
          </section>
          <Footer />
        </>
      ) : data && loading ? (
        <div className={"grid place-items-center h-[80vh] w-full"}>
          <h1 className={"text-3xl font-bold"}>No se encontro información</h1>
        </div>
      ) : (
        <div className={"grid place-items-center h-[90vh] w-full"}>
          <div className={"flex flex-col items-center gap-4"}>
            <LoadSvg className={"stroke-orange w-20 animate-spin"} />
            <h1 className={"text-3xl font-bold animate-pulse"}>Cargando...</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
