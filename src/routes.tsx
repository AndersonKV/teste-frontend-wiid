import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./Component/App";
import Login from "./Component/Home/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/app" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
