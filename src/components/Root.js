import React from "react";
import {Home} from "./Home/Home";
import {ContentSt, WrapperSt} from "./Root.css";

const Root = () => {
  return (
    <WrapperSt>
      <ContentSt>
        <Home />
      </ContentSt>
    </WrapperSt>
  );
};

export default Root;
