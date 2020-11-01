import React, {Fragment} from 'react';
import {GreetingSt, TitleSt} from "./Home.css";

export const Home = () => {
  return (
    <Fragment>
      <GreetingSt>Hi, I'm Alice.</GreetingSt>
      <TitleSt>I'm a Product Designer living and working in Berlin.</TitleSt>
    </Fragment>
  );
};
