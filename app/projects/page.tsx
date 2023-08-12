"use client";
import { useState } from "react";
import Header1 from "@/components/titulos/Header1";
import Image from "next/image";
import arrow from "@/public/icons/right-arrow.png";
import { images } from "@/components/Project/projectsInfo";

const Projects = () => {
  const [count, setCount] = useState(0);

  const handleVoltar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(images.length - 1);
    }
  };

  const handleNext = () => {
    if (images.length - 1 > count) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex w-full justify-start">
        <Header1>Projects</Header1>
      </div>
      <div className="relative mt-3 md:h-96 w-full">
        <button
          className="absolute top-28 md:top-44 bg-black"
          onClick={handleVoltar}
        >
          <Image
            className="rotate-180 invert"
            src={arrow}
            width={20}
            alt="Back"
          />
        </button>
        <button
          className="absolute bg-black top-28 right-0 md:top-44"
          onClick={handleNext}
        >
          <Image src={arrow} width={20} alt="Back" className="invert" />
        </button>
        {images[count]}
      </div>
    </div>
  );
};

export default Projects;
