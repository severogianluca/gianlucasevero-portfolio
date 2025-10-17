"use client";

import React from "react";
import { Vortex } from "./ui/vortex";

function Section() {
  return (
    // <div className="w-full h-[30rem] overflow-hidden">
    //   <Vortex
    //     backgroundColor="black"
    //     className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    //   >
    //     <h2 className="text-white text-2xl md:text-8xl font-bold text-center">
    //       Gianluca Severo
    //     </h2>
    //     <p className="text-white text-sm md:text-4xl max-w-xl mt-6 text-center italic">
    //       Junior full-stack web developer
    //     </p>


    //   </Vortex>
    // </div>3



    <div className="relative w-full h-[100vh] overflow-hidden">
      <iframe
        src="https://my.spline.design/claritystream-M29eSI8NNDRudbdh2pBdaFno/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="absolute bottom-0 right-0 w-[320px] h-[145px] bg-black pointer-events-none" />
    </div>


  );
}


export default Section;