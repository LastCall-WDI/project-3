import React, {Component} from "react";
import {browserHistory} from "react-router";
import update from "react-addons-update";

import Nav from "../Nav/Nav";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      user: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  handleSubmit(event) {
    console.log('hello')
    event.preventDefault();
    console.log('state in login component', JSON.stringify(this.state))
    fetch(`http://localhost:8000/users/login`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((results) => {
      console.log('results in login component:',results);
      results.json().then((jwt) => {
        console.log('jwt in login component', jwt.token)
        // console.log(jwt);
        window.localStorage.setItem("MyToken", jwt.token);
        console.log('localstorage token',window.localStorage.getItem("MyToken"))
        // HOW WE CAN LOGOUT - wipe token
        // window.localStorage.setItem("MyToken", "")
        // console.log('localstorage after wipe',window.localStorage.getItem("MyToken"))

        browserHistory.push("/users/dashboard");
      })
    })
    .catch(() => {
      alert("Not Authenticated!");
    })
  }

  render() {
    return (
     <div>
     <Nav />
        <div className="container">
          <h2>Login Here</h2>
          <div className="form-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h4>Email:</h4>
              <input name="email" type="email" onChange={this.handleChange.bind(this)} />
              <h4>Password:</h4>
              <input name="password" type="password" onChange={this.handleChange.bind(this)} />
              <button className="standard-btn" type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
