import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Transactions from "./containers/Transactions";
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} />;
    <Route path="/login" render={(props) => <Login {...props} {...childProps} />} />;
    <Route path="/transactions" render={(props) => <Transactions {...props} {...childProps} />} />;    
    <Route component={NotFound} />;
  </Switch>;
