import React from "react";
import { Switch, Route } from "react-router-dom";
import { PageTemplate } from "./shared/PageTemplate/PageTemplate";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { ProjectsDetail } from "./components/Projects/ProjectsDetail/ProjectsDetail";
import { Home } from "./components/Home/Home";
import { colors } from "./shared/variables";

export const appRoutes = (
  <Switch>
    <Route path="/about">
      <PageTemplate
        isInverted
        navbarColor={colors.charcoal}
        backgroundColor={colors.charcoal}
      >
        <About />
      </PageTemplate>
    </Route>

    <Route path="/projects">
      <PageTemplate isTransparent isInverted>
        <Projects />
      </PageTemplate>
    </Route>

    <Route path="/project/:id">
      <PageTemplate isTransparent isInverted>
        <ProjectsDetail />
      </PageTemplate>
    </Route>

    <Route path="/">
      <PageTemplate>
        <Home />
      </PageTemplate>
    </Route>
  </Switch>
);
