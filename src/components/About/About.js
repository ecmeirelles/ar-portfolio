import React, { useEffect } from "react";
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { data } from "./utils";
import { TextLink } from "../../shared/TextLink/TextLink";
import { IconButton } from "../../shared/IconButton/IconButton";
import { colors } from "../../shared/variables";
import {
  WrapperSt,
  ContainerSt,
  ContentSt,
  BoxSt,
  TitleSt,
  DescriptionSt,
  HeaderSt,
  SubTitleSt,
  SocialMediaContainerSt,
  LetsTalkSt,
} from "./About.css";

export const About = () => {
  useEffect(() => {
    document.body.style.backgroundColor = colors.charcoal;

    return () => {
      document.body.style.backgroundColor = colors.white;
    }
  }, []);

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

      {data.map((content, index) => {
        const isIndexEven = index % 2 === 0;
        return (
          <ContainerSt key={content.id}>
            <ContentSt comesFromRight={isIndexEven}>
              <SubTitleSt>{content.title}</SubTitleSt>
              <DescriptionSt>{content.description}</DescriptionSt>
            </ContentSt>
            <BoxSt comesFromRight={isIndexEven} />
            <BoxSt comesFromRight={!isIndexEven} />
          </ContainerSt>
        )
      })}
      <LetsTalkSt>
        <p>
          You’ve read this far?
          <TextLink
            to="mailto:me@alicerevel.com"
            target="_blank"
            label="Let’s talk!"
            isExternal
            isInline
          />
        </p>
        <SocialMediaContainerSt>
          <IconButton iconName={faEnvelope} to="mailto:me@alicerevel.com" target="_blank" />
          <IconButton iconName={faLinkedinIn} to="https://www.linkedin.com/in/alice-revel/" target="_blank" />
          <IconButton iconName={faInstagram} to="https://www.instagram.com/a_rvl/" target="_blank" />
        </SocialMediaContainerSt>
      </LetsTalkSt>
    </WrapperSt>
  );
};
