import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Car from './pages/Car'
import User from './pages/User'
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/category" component={Category}></Route>
      <Route path="/car" component={Car}></Route>
      <Route path="/user" component={User}></Route>
    </Switch>
  </BrowserRouter>
)