import React, { Component } from "react";
import { Link } from "react-router";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    window.localStorage.setItem("MyToken", "");
    window.localStorage.setItem("user_id", "");
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
            {/* Hey, {this.props.firstname} */}
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
