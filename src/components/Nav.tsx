import React, { useState } from "react";
import LogoSvg from "@/assets/LogoSvg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-dark flex justify-center px-4">
      <div className="flex justify-between lg:grid lg:grid-cols-2 items-center min-h-32 w-full max-w-7xl relative">
        <LogoSvg />

        {/* Mobile icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menú Desktop */}
        <div className="w-full hidden lg:block">
          <ul className="justify-end items-center content-center h-full flex gap-12 text-white">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Listado</li>
            <li>
              <button className="px-5 py-3 border border-orange rounded-lg">
                Vende tu auto
              </button>
            </li>
          </ul>
        </div>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dark lg:hidden z-50">
            <ul className="flex flex-col items-center text-white py-4 gap-4">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Listado</li>
              <li>
                <button className="px-5 py-3 border border-orange rounded-lg">
                  Vende tu auto
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
