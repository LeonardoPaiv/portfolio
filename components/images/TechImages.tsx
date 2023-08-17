import Image, { StaticImageData } from "next/image";
import React from "react";

const TechImages = ({image, alt}: {image: StaticImageData, alt: string}) => {
  return (
    <div
      className="shadow-lg shadow-violet-700 bg-opacity-70 bg-white rounded-sm p-3 mb-3 w-24 h-24 md:w-44 md:h-44 items-center justify-center flex"
    >
      <Image src={image} alt={alt} width={144} height={144} className="w-auto h-auto"/>
    </div>
  );
};

export default TechImages;
