import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import update from 'react-addons-update';

import Nav from '../Nav/Nav';

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
    event.preventDefault();

    fetch(`https://andres-wdi-project3.herokuapp.com/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((results) => {
      results.json().then((jwt) => {
        window.localStorage.setItem('MyToken', jwt.token);
        this.props.router.push('/users/dashboard');
      });
    })
    .catch(() => {
      console.log('User login has failed');
    });
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
    );
  }
}

export default Login;
