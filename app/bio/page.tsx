import React from "react";
import img from "../../public/1685913423614.jpg";
import Image from "next/image";

const Bio = () => {
  return (
    <div className="h-full flex md:flex-row flex-col justify-around items-center ">
      <div className="md:w-2/4">
        <h1 className="mb-4 text-3xl">
          I am a Developer passionated to bring{" "}
          <span className="text-violet-500">solutions</span>
        </h1>
        <p className="text-justify">
          I am a professional passionate about innovation and technology, always
          seeking new challenges and opportunities to grow and contribute. With
          a solid background in Computer Science and experience in complex
          projects, I possess the ability to analyze problems and develop
          creative and efficient solutions. Throughout my career, I have worked
          with a wide range of technologies, from web development using ReactJS
          and Node.js to mobile applications with Flutter. Additionally, I have
          knowledge in both SQL and NoSQL databases, which allows me to create
          robust and scalable systems
        </p>
      </div>
      <Image
        className="rounded-xl"
        src={img}
        alt="Leonardo de Paiva Rêgo"
        width={426}
        height={240}
      />
    </div>
  );
};

export default Bio;
