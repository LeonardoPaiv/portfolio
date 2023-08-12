import Image from "next/image";
import img from "../../public/typescript-def.png";
import Main from "../../components/containers/Main";
import Header2 from "../../components/titulos/Header2";

const images = [img, img, img, img, img, img];

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
          <Image
          className="bg-gray-200 p-1 mb-3"
            key={i}
            src={item}
            alt="Leonardo de Paiva Rêgo"
            width={144}
            height={144}
          />
        ))}
      </div>
    </Main>
  );
};

export default MainTechs;
