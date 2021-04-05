import React from 'react';
import { useParams } from 'react-router-dom';
import {
  WrapperSt,
  ImageWrapperSt,
  TextWrapperSt,
  DescriptionContainerSt,
  DescriptionTitleSt,
  DescriptionSt,
} from "./ProjectsDetail.css";
import { ProjectTitleSt, ProjectSubtitleSt } from "../Projects.css";
import { myProjects } from "../utils";

export const ProjectsDetail = () => {
  const { id: projectId } = useParams();
  const project = myProjects.find(p => p.id === projectId);

  return (
    <WrapperSt>
      <ImageWrapperSt key={project.id}>
        <img src={project.src} alt={project.name}/>
        <TextWrapperSt>
          <ProjectTitleSt>{project.name}</ProjectTitleSt>
          <ProjectSubtitleSt>{project.subtitle}</ProjectSubtitleSt>
        </TextWrapperSt>
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
    </WrapperSt>
  );
};
