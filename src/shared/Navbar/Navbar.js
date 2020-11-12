import React from 'react';

import {ContentSt, LogoSt, MenuBarSt, MenuItemsSt} from "./Navbar.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <MenuBarSt>
      <ContentSt>
        <LogoSt>
          <Link to="/">ar.</Link>
        </LogoSt>
        <MenuItemsSt>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </MenuItemsSt>
      </ContentSt>
    </MenuBarSt>
  )
};
