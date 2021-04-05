import React from 'react';

import {
  WrapperSt,
  ImageWrapperSt,
  TextWrapperSt,
  ProjectTitleSt,
  ProjectSubtitleSt
} from "./Projects.css";
import { myProjects } from "./utils";

export const Projects = () => {
  return (
    <>
      <WrapperSt>
        {myProjects.map(project => (
          <ImageWrapperSt key={project.id} to={`/project/${project.id}`}>
            <img src={project.src} alt={project.name}/>
            <TextWrapperSt>
              <ProjectTitleSt>{project.name}</ProjectTitleSt>
              <ProjectSubtitleSt>{project.subtitle}</ProjectSubtitleSt>
            </TextWrapperSt>
          </ImageWrapperSt>
        ))}
      </WrapperSt>
    </>
  );
};
