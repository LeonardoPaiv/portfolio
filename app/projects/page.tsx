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
      setCount(images.length -1)
    }

  };

  const handleNext = () => {
    if (images.length - 1 > count) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex w-full justify-start">
        <Header1>Projects</Header1>
      </div>
      <div className="relative mt-3 h-96 w-full">
        <button className="absolute top-44" onClick={handleVoltar}>
          <Image
            className="rotate-180 invert"
            src={arrow}
            width={40}
            alt="Back"
          />
        </button>
        <button className="absolute invert top-44 right-0" onClick={handleNext}>
          <Image src={arrow} width={40} alt="Back" />
        </button>
        {images[count]}
      </div>
    </div>
  );
};

export default Projects;
