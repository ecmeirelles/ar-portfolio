import React from "react";
import {Home} from "./Home/Home";
import {ContentSt, WrapperSt} from "./App.css";

const App = () => {
  return (
    <WrapperSt>
      <ContentSt>
        <Home />
      </ContentSt>
    </WrapperSt>
  );
};

export default App;
