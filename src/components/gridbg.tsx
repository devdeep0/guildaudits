import React from "react";
import Image from "next/image";
export function GridBackgroundDemo() {
  return (
    
       <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Image
      className="rounded-3xl mix-blend-multiply"
      src='/WhatsApp_Image_2024-02-01_at_10.10.33_AM.jpeg'
      alt=""
      height={500}
      width={500}
      />
  

    </div>
    
  );
}
