import React from "react";
import { NavBar } from "../Components/ui/NavBar";
import { Switch, Route, Redirect } from "react-router";

import { MarvelScreen } from "../Components/marvel/MarvelScreen";
import { HeroeScreen } from "../Components/heroes/HeroeScreen";
import { DcScreen } from "../Components/dc/DcScreen";
export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroeScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
