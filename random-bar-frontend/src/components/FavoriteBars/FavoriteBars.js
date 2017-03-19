import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import UserNav from '../Nav/UserNav';
import SavedBar from './SavedBar';

class FavoriteBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
    // Pass in dummy content to avoid errors if user data comes back as empty
      bars: [
        {
          firstname: 'John'
        }
      ],
      user_id: 0
    };
  }

  // Get dynamic content from server user saved JWT
  componentDidMount() {
    fetch('https://andres-wdi-project3.herokuapp.com/users/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('MyToken')
      }
    })
    .then((results) => {
      results.json().then((data) => {
        // Get user data and user id
        this.setState({ bars: data.data });
        this.setState({ user_id: data.user_id});
        // Create new items in localStorage to store user_id and user status
        window.localStorage.setItem('user_id', parseInt(this.state.user_id));
        window.localStorage.setItem('loggedIn', true);
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
      // Re-direct to login page if 401. (Noting that this code below does not work as expected)
      browserHistory.push('/users/login');
    });
  }

  render() {
    return(
      <div>
        <UserNav/>
        <div className="container">
        <h2>Your Favorite Bars</h2>
          {this.state.bars.map((bar) => {
            return(
              <div key={bar.id}>
                <SavedBar
                  bar_id={bar.id}
                  user_id={this.state.user_id}
                  name={bar.name}
                  rating={bar.rating}
                  address={bar.address}
                  phone_number={bar.phone}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FavoriteBars;
