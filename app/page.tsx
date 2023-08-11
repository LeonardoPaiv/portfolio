import Image from "next/image";
import React from "react";
import img from "../public/1685913423614.jpg";
import MainMenu from "@/components/mainMenu/MainMenu";
import Header1 from "@/components/titulos/Header1";

const page = () => {
  return (
    <div className="h-full flex md:flex-row flex-col justify-around items-center ">
      <div className="flex flex-col md:h-2/4 h-1/3 md:justify-between justify-around">
        <Header1>Leonardo Paiva</Header1>
        <MainMenu />
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

export default page;
