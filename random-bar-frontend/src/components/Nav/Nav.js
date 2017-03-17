import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
          <Link to="/signup">Sign Up</Link>
          </li>
          <li>
          <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
