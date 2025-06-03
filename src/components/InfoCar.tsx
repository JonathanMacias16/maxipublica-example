import React from "react";
import Image from "next/image";
import { getAttributeById } from "@/utils/getAttributeById";
import { CarType } from "@/CarType";

const InfoCar = ({ data }: { data: CarType | undefined }) => {
  const items = [
    "brand",
    "model",
    "colorExt",
    "transmission",
    "year",
    "odometer",
    "energy",
    "trim",
    "cylinders",
    "doors",
    "bodyType",
  ];
  const attribute = (attr: string) => {
    return getAttributeById(data?.attributes || [], attr);
  };

  return (
    <div className={"self-start lg:col-span-4 grid gap-2 w-full relative z-0"}>
      <Image
        src={"/share.svg"}
        alt={"Share"}
        width={22}
        height={22}
        className={"cursor-pointer absolute top-0 right-0"}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Enlace copiado al portapapeles");
          });
        }}
      />
      <h1 className={"font-semibold text-2xl"}>{data?.title}</h1>
      <p className={"text-sm"}>
        <span className={"mr-2 px-2 py-0.5 bg-orange rounded-sm text-white"}>
          {attribute("year")?.value}
        </span>
        {Number(attribute("odometer")?.value).toLocaleString("es-MX")}{" "}
        {attribute("odometerUnits")?.value} -{" "}
        {data?.location.location.country.name}
      </p>
      <div className={"border-t border-gray-300 my-2"} />
      <div
        className={
          "flex justify-between p-10 border border-gray-extra-light rounded-lg"
        }
      >
        <div className={"w-4/6"}>
          <h2 className={"text-xl mb-2"}>{data?.seller.commercialName}</h2>
          <span className={"text-orange text-sm"}>
            {data?.location.street} {data?.location.numExt}
          </span>
          <p className={"mt-2"}>
            {`${data?.location.location.neighborhood.name}, ${data?.location.location.city.name}, 
                  ${data?.location.location.state.name}, ${data?.location.location.country.name}, 
                  ${data?.location.zipCode}`}
          </p>
        </div>
        <div>
          <Image
            alt={"nissan"}
            className={"rounded-full"}
            src={data?.seller.photo ?? ""}
            height={58}
            width={58}
          />
        </div>
      </div>
      <p className={"mt-10"}>
        <span className="text-2xl font-black mr-4">
          ${data?.price.toLocaleString("es-MX")}
        </span>
        {attribute("isPriceOffer")?.value && (
          <span className={"text-gray-extra-light"}>
            <del>
              $
              {Number(attribute("previousPrice")?.value).toLocaleString(
                "es-MX",
              )}
            </del>
          </span>
        )}
      </p>
      <div className={"grid place-items-center p-10 bg-gray-light rounded-lg"}>
        <ul>
          {items.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-2 gap-2 my-2 items-center text-sm"
            >
              <span className="font-medium">{attribute(item)?.label}:</span>
              <span className="text-left">
                {item === "odometer" ? (
                  <>
                    {Number(attribute(item)?.value).toLocaleString("es-MX")}{" "}
                    {attribute("odometerUnits")?.value}
                  </>
                ) : item === "cylinders" || item === "doors" ? (
                  `${attribute(item)?.value} ${attribute(item)?.label}`
                ) : (
                  attribute(item)?.value
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={
          "text-orange m-2 md:max-w-xs py-4 max-h-16 border-orange border rounded-lg"
        }
      >
        Descargar ficha técnica
      </button>
    </div>
  );
};

export default InfoCar;
