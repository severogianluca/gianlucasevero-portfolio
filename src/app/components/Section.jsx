"use client";

import React from "react";
import { Vortex } from "./ui/vortex";

function Section() {
  return (
    <div className="w-full h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-8xl font-bold text-center">
          Gianluca Severo
        </h2>
        <p className="text-white text-sm md:text-4xl max-w-xl mt-6 text-center italic">
          Junior full-stack web developer
        </p>


      </Vortex>
    </div>
  );
}

// function FullPage() {
//   return (
//     <div className="mx-auto rounded-md h-screen overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         rangeY={800}
//         particleCount={500}
//         baseHue={120}
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The hell is this?
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//           burned and you&apos;ll have a scar.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2 text-white">Watch trailer</button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }

// export { Section, FullPage };
export default Section;