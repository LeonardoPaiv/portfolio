import React from "react";
import img from "../../public/1685913423614.jpg";
import Image from "next/image";
import Main from "@/components/containers/Main";

const Bio = () => {
  return (
    <Main>
      <Image
        className="rounded-xl"
        src={img}
        alt="Leonardo de Paiva Rêgo"
        width={426}
        height={240}
      />
      <div className="md:w-1/3 md:h-2/4 h-1/3 justify-around ">
        <h1 className="mb-4 text-3xl text-justify">
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
    </Main>
  );
};

export default Bio;
