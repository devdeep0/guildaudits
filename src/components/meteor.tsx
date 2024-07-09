import Meteors from "@/components/magicui/meteors";
import Image from "next/image";
import { AnimatedBeamDemo } from "./animatedbeamdemo";
export function MeteorDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <div className="flex w-full">
      <div className="flex flex-col  justify-center w-full gap-5 p-20 ml-4">
        <div className="italic text-4xl font-semibold">Get an audit done today for your</div>
        <div className="text-7xl font-bold text-[#01e101]">Smart Contract</div>
        <div className="text-xl">Join 1000+ leaders who secured themselves from losing Billion Dollars</div>
        
      <button className=" px-8 py-3 font-bold text-xl bg-[#01e101] text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ">
  Request an Audit
</button>
    
    </div>
    <div className="w-full flex justify-end z-20 p-10">
    <AnimatedBeamDemo/>
    </div>
    </div>
    </div>
  );
}
