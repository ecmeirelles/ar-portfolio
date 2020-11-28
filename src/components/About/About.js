import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { data } from "./utils";
import {
  WrapperSt,
  ContainerSt,
  ContentSt,
  TitleSt,
  DescriptionSt, HeaderSt, SubTitleSt, SocialMediaContainerSt, SocialMediaIconSt, LetsTalkrSt,
} from "./About.css";

export const About = () => {
  return (
    <WrapperSt>
      <HeaderSt>
        <TitleSt>I design digital products with real people in mind.</TitleSt>
        <DescriptionSt>
          Currently working at heycar, a corporate venture of Volkswagen Financial
          Services launched by BCG Digital Ventures, I believe humans should always
          be at the center of how products are conceived, built, and improved.
        </DescriptionSt>
      </HeaderSt>

      {data.map(content => (
        <ContainerSt key={content.id}>
          <ContentSt>
            <SubTitleSt>{content.title}</SubTitleSt>
            <DescriptionSt>{content.description}</DescriptionSt>
          </ContentSt>
        </ContainerSt>
      ))}
      <LetsTalkrSt>
        <p>
          You’ve read this far?
          <a href="mailto:me@alicerevel.com" target="_blank" rel="noreferrer"> Let’s talk!</a>
        </p>
        <SocialMediaContainerSt>
          <SocialMediaIconSt href="mailto:me@alicerevel.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </SocialMediaIconSt>
          <SocialMediaIconSt href="https://www.linkedin.com/in/alice-revel/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </SocialMediaIconSt>
          <SocialMediaIconSt href="https://www.instagram.com/a_rvl/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </SocialMediaIconSt>
        </SocialMediaContainerSt>
      </LetsTalkrSt>
    </WrapperSt>
  );
};
