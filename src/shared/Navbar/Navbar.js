import React from "react";
import { Link } from "react-router-dom";
import { string, bool } from 'prop-types';

import { ContentSt, LogoSt, MenuBarSt, MenuItemsSt } from "./Navbar.css";
import { colors } from "../variables";

export const Navbar = ({ bgColor, isInverted }) => {
  return (
    <MenuBarSt bgColor={bgColor}>
      <ContentSt>
        <LogoSt isInverted={isInverted}>
          <Link to="/">ar.</Link>
        </LogoSt>
        <MenuItemsSt isInverted={isInverted}>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </MenuItemsSt>
      </ContentSt>
    </MenuBarSt>
  )
};

Navbar.propTypes = {
  bgColor: string,
  isInverted: bool,
};

Navbar.defaultProps = {
  bgColor: colors.snow,
  isInverted: false,
};
