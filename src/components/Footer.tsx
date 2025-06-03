import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={
        "bg-dark-blue min-h-72 flex justify-center text-white lg:px-0 px-4"
      }
    >
      <div className={"max-w-7xl px-4 w-full py-20"}>
        <div className={"grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-10"}>
          <div className={"md:space-y-6 space-y-4"}>
            <h1 className={"text-xl font-bold"}>
              Tel. <span className={"text-orange"}>(55) 4424 2071</span>
            </h1>
            <p>ventas@automotors.com</p>
            <p>
              Av. Central No.209, Col. Nueva Industrial Vallejo, Gustavo A.
              Madero CP 07700 CDMX
            </p>
          </div>
          <ul className={"md:space-y-6 space-y-4"}>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Listado</li>
            <li>Vende tu auto</li>
          </ul>
          <ul className={"md:space-y-6 space-y-4"}>
            <li>Privacidad</li>
            <li>Términos y condiciones</li>
            <li>Preguntas frecuentes</li>
            <li>Lista de precios</li>
          </ul>
          <ul className={"md:space-y-6 space-y-4"}>
            <li>Ayuda</li>
            <li>Contacto</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>
        <div className={"border-t border-gray-300 mt-10 mb-10 md:mb-20"} />
        <div className={"md:flex grid md:gap-0 gap-4 justify-between"}>
          <span className={"text-[#C5C3C3]"}>
            Copyright © 2021 Automotors. Todos los derechos reservados.
          </span>
          <ul>
            <li className={"inline-block mr-4"}>
              <Image
                src={"/facebook.svg"}
                alt={"Facebook"}
                width={30}
                height={30}
              />
            </li>
            <li className={"inline-block mr-4"}>
              <Image
                src={"/instagram.svg"}
                alt={"Instagram"}
                width={30}
                height={30}
              />
            </li>
            <li className={"inline-block mr-4"}>
              <Image
                src={"/whatsapp.svg"}
                alt={"WhatsApp"}
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
