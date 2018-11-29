import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Pingou from "./pages/Pingou";
import Car from "./pages/Car";
import User from "./pages/User";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/pingou" component={Pingou} />
      <Route path="/car" component={Car} />
      <Route path="/user" component={User} />
    </Switch>
  </BrowserRouter>
);
