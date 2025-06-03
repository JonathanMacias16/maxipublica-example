import React from "react";
import LogoSvg from "@/assets/LogoSvg";

const Nav = () => {
  return (
    <nav className={"bg-dark flex justify-center px-4"}>
      <div
        className={"grid lg:grid-cols-2 items-center min-h-32 w-full max-w-7xl"}
      >
        <LogoSvg />
        <div className={"w-full hidden lg:block"}>
          <ul
            className={
              "justify-end items-center content-center h-full flex gap-12 text-white"
            }
          >
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Listado</li>
            <li>
              <button className={"px-5 py-3 border border-orange rounded-lg"}>
                Vende tu auto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
