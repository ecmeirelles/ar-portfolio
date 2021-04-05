import React from "react";
import { bool, string, node } from "prop-types";

import { Navbar } from "../Navbar/Navbar";
import { ContentSt, WrapperSt } from "./PageTemplate.css";
import { colors } from "../variables";

export const PageTemplate = ({
  children,
  navbarColor,
  backgroundColor,
  isInverted,
  isTransparent,
}) => {
  const navbarBgColor = isTransparent ? 'transparent' : navbarColor;

  return (
    <WrapperSt bgColor={backgroundColor}>
      <Navbar isInverted={isInverted} bgColor={navbarBgColor} />
      <ContentSt isTransparent={isTransparent}>
        {children}
      </ContentSt>
    </WrapperSt>
  );
};

PageTemplate.propTypes = {
  navbarColor: string,
  backgroundColor: string,
  isInverted: bool,
  isTransparent: bool,
  children: node.isRequired,
};

PageTemplate.defaultProps = {
  navbarColor: colors.white,
  backgroundColor: colors.white,
  isInverted: false,
  isTransparent: false,
};
