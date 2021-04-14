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
      document.body.style.backgroundColor = colors.snow;
    }
  }, []);

  return (
    <WrapperSt>
      {data.map((content, index) => {
        const isIndexEven = index % 2 === 0;
        const Heading = index === 0 ? TitleSt : SubTitleSt;
        const Content = index === 0 ? HeaderSt : ContentSt;
        return (
          <ContainerSt key={content.id}>
            <Content comesFromRight={!isIndexEven}>
              <Heading>{content.title}</Heading>
              <DescriptionSt>{content.description}</DescriptionSt>
            </Content>
            <BoxSt comesFromRight={!isIndexEven} />
            <BoxSt comesFromRight={isIndexEven} />
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
          <IconButton iconName={faEnvelope} to="mailto:alicerevel08@gmail.com" target="_blank" />
          <IconButton iconName={faLinkedinIn} to="https://www.linkedin.com/in/alice-revel/" target="_blank" />
          <IconButton iconName={faInstagram} to="https://www.instagram.com/a_revl/" target="_blank" />
        </SocialMediaContainerSt>
      </LetsTalkSt>
    </WrapperSt>
  );
};
