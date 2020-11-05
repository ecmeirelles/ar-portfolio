import React from 'react';
import {Switch, Route} from "react-router-dom";

import {PageTemplate} from "../shared/PageTemplate/PageTemplate";
import {About} from "./About/About";
import {Projects} from "./Projects/Projects";
import {Home} from "./Home/Home";

export const App = () => (
  <div>
    <Switch>
      <Route path="/about">
        <PageTemplate>
          <About />
        </PageTemplate>
      </Route>

      <Route path="/projects">
        <PageTemplate>
          <Projects />
        </PageTemplate>
      </Route>

      <Route path="/">
        <PageTemplate>
          <Home />
        </PageTemplate>
      </Route>
    </Switch>
  </div>
);
