"use client";

import React from "react";
import { Vortex } from "./ui/vortex";

function Section() {
  return (
    <>
      {/* Vortex per MOBILE e TABLET - nascosto su desktop */}
      <div className="w-full h-screen overflow-hidden lg:hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Gianluca Severo
          </h2>
          <p className="text-white text-sm md:text-3xl max-w-xl mt-6 text-center italic">
            Junior full-stack web developer
          </p>
        </Vortex>
      </div>

      {/* Iframe Spline per DESKTOP - visibile solo da lg in su */}
      <div className="relative w-full h-screen overflow-hidden hidden lg:block">
        <iframe
          src="https://my.spline.design/claritystream-M29eSI8NNDRudbdh2pBdaFno/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full"
          title="3D Animation"
        />

        <div className="absolute bottom-0 right-0 w-[320px] h-[57px] bg-black pointer-events-none" />


      </div>
    </>
  );
}

export default Section;