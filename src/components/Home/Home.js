import React from "react";

import { TextLink } from "../../shared/TextLink/TextLink";
import { ContentSt, GreetingSt, TitleSt } from "./Home.css";

export const Home = () => {
  return (
    <ContentSt>
      <GreetingSt>Hi, I'm Alice.</GreetingSt>
      <TitleSt>I'm a Product Designer living and working in Berlin.</TitleSt>
      <TextLink to="/projects" label="See my work"/>
    </ContentSt>
  );
};
