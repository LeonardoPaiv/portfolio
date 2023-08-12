import Image, { StaticImageData } from "next/image";
import React from "react";

const TechImages = ({image, alt}: {image: StaticImageData, alt: string}) => {
  return (
    <div
      className="bg-gray-200 p-1 mb-3 w-44 h-44 items-center justify-center flex"
    >
      <Image src={image} alt={alt} width={144} height={144} />
    </div>
  );
};

export default TechImages;
