import Image, { StaticImageData } from "next/image";
import React from "react";
import Header2 from "../titulos/Header2";

interface IProkectContainerProp {
  image: StaticImageData;
  title: string;
  description: string;
}

const ProjectContainer = ({
  image,
  title,
  description,
}: IProkectContainerProp) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-60 md:h-96 overflow-hidden flex items-center">
        <Image src={image} alt="s" width={500} height={444} className="w-auto h-auto"/>
      </div>
      <div className="flex w-full justify-start my-4">
        <Header2>{title}</Header2>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ProjectContainer;
