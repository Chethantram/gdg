import React from "react";
import { Merge, NotebookText } from "lucide-react";

const Hero = () => {
  return (
    <header className="mx-auto pt-40 background-img">
      <h1 className="text-5xl font-bold text-center ">
        Empowering Quality <span className="text-blue-600">Education</span>
      </h1>
      <p className="text-md text-center font-medium mt-10 ">
        Bridging the Digital Divide <br /> Innovating for Inclusive and
        Equitable Education in the Digital Age.
      </p>
      <div className="flex justify-center items-center gap-5 mt-8">
        <button className="bg-blue-600 flex gap-3 items-center rounded-md px-4 py-2 text-sm text-white hover:bg-blue-800"><Merge className="size-5"/>Join Us Now</button>
        <button className="border-gray-800 border-2 gap-3 text-black flex items-center rounded-md px-4 py-2 text-sm  hover:bg-gray-700 hover:text-white" ><NotebookText className="size-5"/>Get Started</button>
      </div>
    </header>
  );
};

export default Hero;