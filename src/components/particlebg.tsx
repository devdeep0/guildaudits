"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Particles from "@/components/magicui/particles";
import Bottom from "./bottom";
export const ParticlesDemo:any = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
     
      <span className="absolute pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <Image className="opacity-10"
        src="/DPa.png"
        alt=""
        height={1000}
        width={1000}
        />
      </span>
      <div className="flex flex-col items-center gap-5 z-10">
      <span className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-[#01e101] dark:to-slate-900/10">
      SMART CONTRACT AUDITS
      </span>
      <span className="text-xl w-[900px] ">
      Mitigate weaknesses in your smart contract and improve its functionality with a double line-to-line code analysis and a separate review by a lead auditor.
      </span>
      <div className=" flex gap-10 p-4 items-center justify-center">

      <div className="flex items-center justify-center">
      <button className=" px-8 py-3 text-xl font-bold bg-[#01e101] text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ">
  Request an Audit
</button>

    </div>
      <div className="mt-2"><Bottom/></div>
      </div>
      </div>
      <Particles
        className="absolute z-0 inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};


