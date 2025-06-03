import React from "react";
import Image from "next/image";
import { getAttributeById } from "@/utils/getAttributeById";
import { CarType } from "@/CarType";

const BreadCrumb = ({ data }: { data: CarType | undefined }) => {
  const attribute = (attr: string) => {
    return getAttributeById(data?.attributes || [], attr);
  };
  return (
    <nav
      className="text-sm font-medium text-gray-text mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="list-reset flex flex-wrap gap-y-2 items-center">
        <li>
          <a href="#" className="hover:underline">
            Volver al listado
          </a>
        </li>
        <li>
          <div className={"size-1 rounded-full bg-orange mx-4"} />
        </li>
        <li>
          <a href="#" className="hover:underline">
            Compra de autos
          </a>
        </li>
        <li>
          <Image
            src={"/arrowNav.svg"}
            alt={""}
            width={6}
            height={6}
            className={"mx-4"}
          />
        </li>
        <li className="text-gray-500">
          <a href="#" className="hover:underline">
            {attribute("brand")?.value}
          </a>
        </li>
        <li>
          <Image
            src={"/arrowNav.svg"}
            alt={""}
            width={6}
            height={6}
            className={"mx-4"}
          />
        </li>
        <li className="text-gray-500">
          <a href="#" className="hover:underline">
            {attribute("model")?.value}
          </a>
        </li>
        <li>
          <Image
            src={"/arrowNav.svg"}
            alt={""}
            width={6}
            height={6}
            className={"mx-4"}
          />
        </li>
        <li className="text-gray-500">
          <a href="#" className="hover:underline">
            {attribute("bodyType")?.value}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
