import React from 'react';

import { LinkButtonSt, ContentSt, GreetingSt, TitleSt } from "./Home.css";

export const Home = () => {
  return (
    <ContentSt>
      <GreetingSt>Hi, I'm Alice.</GreetingSt>
      <TitleSt>I'm a Product Designer living and working in Berlin.</TitleSt>
      <LinkButtonSt to="/projects">
        See my work
      </LinkButtonSt>
    </ContentSt>
  );
};
