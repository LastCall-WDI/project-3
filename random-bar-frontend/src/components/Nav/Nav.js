import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: {
        display: 'none'
      },
      loggedOut: {
        display: 'inline-block'
      }
    };
  }

  componentDidMount() {
    if(window.localStorage.getItem('loggedIn')) {
      this.setState({loggedOut: {display: 'none'}});
      this.setState({loggedIn: {display: 'inline-block'}});
    } else {
      this.setState({loggedIn: {display: 'none'}});
      this.setState({loggedOut: {display: 'inline-block'}});
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
            <Link to="/signup" style={this.state.loggedOut}>Sign Up</Link>
          </li>
          <li>
            <Link to="/login" style={this.state.loggedOut}>Log In</Link>
          </li>
          <li>
            <Link to="/users/dashboard" style={this.state.loggedIn}>My Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
