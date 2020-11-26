import React from "react";
import { Switch, Route } from "react-router-dom";

import { PageTemplate } from "../shared/PageTemplate/PageTemplate";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import { Home } from "./Home/Home";

export const App = () => (
  <div>
    <Switch>
      <Route path="/about">
        <PageTemplate navbarColor="#FFF" backgroundColor="#FFF">
          <About />
        </PageTemplate>
      </Route>

      <Route path="/projects">
        <PageTemplate navbarColor="#DCDCDC" backgroundColor="#CCC">
          <Projects />
        </PageTemplate>
      </Route>

      <Route path="/">
        <PageTemplate navbarColor="rgba(255, 255, 255, 0.3)" backgroundColor="#D8D8D8">
          <Home />
        </PageTemplate>
      </Route>
    </Switch>
  </div>
);
