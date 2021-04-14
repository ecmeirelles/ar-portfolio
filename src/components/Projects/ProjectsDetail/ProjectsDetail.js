import React from 'react';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faMouse} from "@fortawesome/free-solid-svg-icons";
import { myProjects } from "../utils";
import { Heading } from "../../../shared/Heading/Heading";
import { TextLink } from "../../../shared/TextLink/TextLink";
import { colors } from "../../../shared/variables";
import { LaptopMouseContainerSt } from "../Projects.css";
import {
  WrapperSt,
  ImageWrapperSt,
  TextWrapperSt,
  DescriptionContainerSt,
  DescriptionTitleSt,
  DescriptionSt, NextProjectContainerSt,
} from "./ProjectsDetail.css";

export const ProjectsDetail = () => {
  const { id: projectId } = useParams();
  const project = myProjects.find(p => p.id === projectId);
  const projectIndex = myProjects.indexOf(project);
  const hasNext = projectIndex < myProjects.length - 1;
  const nextProject = hasNext ? myProjects[projectIndex + 1] : null;

  return (
    <WrapperSt>
      <ImageWrapperSt key={project.id}>
        <img src={project.src} alt={project.name}/>
        <TextWrapperSt>
          <Heading color={colors.snow}>{project.name}</Heading>
        </TextWrapperSt>
        <LaptopMouseContainerSt>
          <div><FontAwesomeIcon icon={faMouse} size="2x" color={colors.snow} /></div>
          <div><FontAwesomeIcon icon={faAngleDown} size="2x" color={colors.snow} /></div>
        </LaptopMouseContainerSt>
      </ImageWrapperSt>
      {project.text.map(t => {
        const descriptionId = `${projectId}#${t.title}`;
        return (
          <DescriptionContainerSt key={descriptionId} id={descriptionId}>
            <DescriptionTitleSt>{t.title}</DescriptionTitleSt>
            <DescriptionSt dangerouslySetInnerHTML={{__html: t.description}} />
          </DescriptionContainerSt>
        )
      })}
      {hasNext && (
        <NextProjectContainerSt nextProjectImg={nextProject.src}>
          <Heading type={2} color={colors.snow}>
            Next Project
          </Heading>
          <TextLink
            label={nextProject.name}
            to={`/project/${nextProject.id}`}
            color={colors.snow}
          />
        </NextProjectContainerSt>
      )}
    </WrapperSt>
  );
};
