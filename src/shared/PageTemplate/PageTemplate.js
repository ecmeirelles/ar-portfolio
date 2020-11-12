import React from "react";

import {Navbar} from "../Navbar/Navbar";
import {ContentSt, WrapperSt} from "./PageTemplate.css";

export const PageTemplate = ({ children }) => {
  return (
    <WrapperSt>
      <Navbar/>
      <ContentSt>
        {children}
      </ContentSt>
    </WrapperSt>
  );
};
