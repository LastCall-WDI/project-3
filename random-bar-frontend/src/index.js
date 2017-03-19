import React from "react";
import ReactDom from "react-dom";
import {Route, Router, browserHistory} from "react-router";

import "./styles/normalize.css";
import "./styles/style.css";
import "./vendors/font-awesome/css/font-awesome.css"

import Homepage from "./components/Homepage/Homepage";
import BarResult from "./components/BarResult/BarResult";
import FavoriteBars from "./components/FavoriteBars/FavoriteBars";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/bar-result" component={BarResult} />
    <Route path="/users/dashboard" component={FavoriteBars} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
  </Router>
  , document.getElementById("app")
);
