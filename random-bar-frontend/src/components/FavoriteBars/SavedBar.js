import React, { Component } from 'react';
import { Link } from 'react-router';

class SavedBar extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: {
        display: 'block'
      }
    };
  }

  handleDelete() {
    fetch(`https://andres-wdi-project3.herokuapp.com/saved_bars/${this.props.bar_id}/${this.props.user_id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Set display of component to none if item is removed from database
      this.setState({isVisible: {display: 'none'}});
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }

  render() {
    return(
      <div className="saved-bar-container" style={this.state.isVisible}>
        <div>
          <h3>{this.props.name}</h3>
        </div>
        <div className="saved-bar-info">
          <ul>
            <li>Rating: {this.props.rating}</li>
            <li>Address: {this.props.address}</li>
            <li>Phone: {this.props.phone_number}</li>
          </ul>
          <Link to="/users/dashboard">
            <button className="outline-btn" onClick={this.handleDelete.bind(this)}>Remove from Favorites</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SavedBar;
