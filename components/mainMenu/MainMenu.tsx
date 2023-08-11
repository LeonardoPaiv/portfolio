import React from "react";
import LiNavigate from "./LiNavigate";

const MainMenu = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col justify-between items-center md:h-8 h-40">
        <LiNavigate link="bio" label="Bio" />
        <LiNavigate link="projects" label="Projects" />
        <LiNavigate link="main-techs" label="Main Techs" />
        <LiNavigate link="education" label="Education" />
      </ul>
    </nav>
  );
};

export default MainMenu;
