import Image from "next/image";
import typescript from "../../public/techs/typescript-def.png";
import react from "../../public/techs/1611079.png";
import express from "../../public/techs/Expressjs.png";
import nest from "../../public/techs/nestjs-logo-09342F76C0-seeklogo.com.png";
import next from "../../public/techs/nextjs.png";
import nodejs from "../../public/techs/nodejs-logo-FBE122E377-seeklogo.com.png";
import Main from "../../components/containers/Main";
import Header2 from "../../components/titulos/Header2";
import TechImages from "@/components/images/TechImages";

const images = [
  { image: nodejs, alt: "NodeJs" },
  { image: react, alt: "React" },
  { image: express, alt: "ExpressJs" },
  { image: next, alt: "NextJs" },
  { image: nest, alt: "NestJs" },
  { image: typescript, alt: "Typescript" },
];

const MainTechs = () => {
  return (
    <Main>
      <div className="flex flex-col md:w-1/4 md:h-2/4 h-1/3 justify-around md:justify-start ">
        <Header2>Main Techs</Header2>
        <p className="text-justify md:mt-5">
          {`Throughout my journey, I have worked with various technologies, and
          these are some of the main ones. Additionally, in conjunction with
          these technologies, the use of partner technologies for development
          was intrinsic, whether it be the SQL databases used in each project,
          the libraries that facilitated communication between the database and
          framework, the ones that assisted in Test Driven Development (TDD), or
          those that helped with the application's styling, such as
          "MaterialUI".`}
        </p>
      </div>
      <div className="md:columns-2 columns-3">
        {images.map((item, i) => (
          <TechImages image={item.image} alt={item.alt} key={i} />
        ))}
      </div>
    </Main>
  );
};

export default MainTechs;
