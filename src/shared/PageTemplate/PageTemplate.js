import React from "react";

import { Navbar } from "../Navbar/Navbar";
import { ContentSt, WrapperSt } from "./PageTemplate.css";

export const PageTemplate = ({ backgroundColor, children, navbarColor }) => {
  return (
    <WrapperSt backgroundColor={backgroundColor}>
      <Navbar backgroundColor={navbarColor} />
      <ContentSt>
        {children}
      </ContentSt>
    </WrapperSt>
  );
};
