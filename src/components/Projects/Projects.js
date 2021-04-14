import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMouse } from "@fortawesome/free-solid-svg-icons";
import { myProjects } from "./utils";
import { Heading } from "../../shared/Heading/Heading";
import { colors } from "../../shared/variables";
import {
  WrapperSt,
  ImageWrapperSt,
  TextWrapperSt,
  ProjectSubtitleSt, LaptopMouseContainerSt, HoverShapeSt
} from "./Projects.css";

export const Projects = () => {
  return (
    <>
      <WrapperSt>
        {myProjects.map((project, index) => (
          <ImageWrapperSt key={project.id} to={`/project/${project.id}`}>
            <img src={project.src} alt={project.name}/>
            <TextWrapperSt>
              <Heading color={colors.snow}>{project.name}</Heading>
              <ProjectSubtitleSt>{project.subtitle}</ProjectSubtitleSt>
            </TextWrapperSt>
            <HoverShapeSt />
            {index === 0 && (
              <LaptopMouseContainerSt>
                <div><FontAwesomeIcon icon={faMouse} size="2x" color={colors.snow} /></div>
                <div><FontAwesomeIcon icon={faAngleDown} size="2x" color={colors.snow} /></div>
              </LaptopMouseContainerSt>
            )}
          </ImageWrapperSt>
        ))}
      </WrapperSt>
    </>
  );
};
