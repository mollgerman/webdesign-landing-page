import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl  xl:text-7xl font-bold xl:leading-[7.5rem]">
            Web Design & Impactful Digital{" "}
            <span className="text-primary py-2 px-6 my-3 md:my-4 border-8 border-primary relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className=" text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className=" text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className=" text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className=" text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Digital solutions for your
            business and high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full text-white xl:w-auto bg-primary  py-2 px-8 rounded-xl text-xl hover:drop-shadow-md hover:scale-105 ease-in-out duration-330">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content hover:scale-105 ease-in-out duration-100" />{" "}
              Watch our <br /> introductory video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="girl-in-suit-32.png"
            className="w-[230px] h-[320px] md:w-auto md:h-[450px] object-fit xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              100+ Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 4.9 (5.3k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="figma.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%] rotate-12"
        />
        <img
          src="react.svg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-cyan-400 absolute top-[10%] xl:top-[15%] left-[20%] xl:left-[-10%] -rotate-12"
        />
        <img
          src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[15%] left-[7%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
