import React from 'react';

import {
  WrapperSt,
  ImageWrapperSt,
  TextWrapperSt,
  ProjectTitleSt,
  ProjectSubtitleSt
} from "./Projects.css";
import { projectsList } from "./utils";

export const Projects = () => {
  return (
    <>
      <WrapperSt>
        {projectsList.map(project => (
          <ImageWrapperSt key={project.id} to={`/projects/${project.id}`}>
            <img src={project.src} alt={project.name}/>
            <TextWrapperSt>
              <ProjectTitleSt>{project.name}</ProjectTitleSt>
              <ProjectSubtitleSt>{project.description}</ProjectSubtitleSt>
            </TextWrapperSt>
          </ImageWrapperSt>
        ))}
      </WrapperSt>
    </>
  );
};
