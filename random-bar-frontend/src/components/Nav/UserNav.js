import React, { Component } from "react";
import { Link } from "react-router";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    window.localStorage.removeItem("MyToken");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("loggedIn");
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
            <Link to="/bar-result">Find a Bar</Link>
          </li>
          <li>
            <Link to="/" onClick={this.handleSubmit.bind(this)}>Log Out</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserNav;
