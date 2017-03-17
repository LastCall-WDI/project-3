import React, { Component } from "react";
import { Link, browserHistory } from "react-router";


import Nav from "../Nav/Nav";
import BarInfo from "./BarInfo";

class BarResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        coords: {
          latitude: 40.785091,
          longitude: -73.968285
        }
      },
      bars: {
        name: '',
        coordinates: {
          latitude: 40.785091,
          longitude: -73.968285
        }
      },
      loader: {
        display: 'block'
      },
      isVisible: {
        opacity: '0',
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ position });

      fetch(`http://localhost:8000/api/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
        method: 'GET'
      })
      .then((results) => {
        results.json().then((data) => {
          this.setState({bars: data[Math.floor(Math.random() * data.length)]});
          this.setState({loader: { display: 'none'}});
          this.setState({isVisible: {opacity: '1'}});
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    });
  }

  selectNewBar() {
    this.setState({isVisible: {opacity: '0'}});
    this.setState({loader: {display: 'block'}});

    fetch(`http://localhost:8000/api/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({bars: data[Math.floor(Math.random() * data.length)]});
        this.setState({loader: {display: 'none'}});
        this.setState({isVisible: {opacity: '1'}});
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:8000/saved_bars', {
      method: 'POST',
      body: JSON.stringify({
        bar: {
          name: `${this.state.bars.name}`,
          rating: parseInt(`${this.state.bars.rating}`),
          phone: `${this.state.bars.display_phone}`,
          price: `${this.state.bars.price}`,
          address: `${this.state.bars.location.display_address}`,
          user_id: window.localStorage.getItem('user_id')
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      browserHistory.push('/users/dashboard');
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })

  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="loading-anim" style={this.state.loader}></div>
          <div className="bar-results">
            <div className="bar-card" style={this.state.isVisible}>
              <BarInfo
                name={this.state.bars.name}
                status={this.state.bars.is_closed}
                rating={this.state.bars.rating}
                phone_number={this.state.bars.display_phone}
                price_range={this.state.bars.price}
              />
              <button className="outline-btn" onClick={this.handleSubmit.bind(this)}>Add to Favorites</button>
              <a href={`http://www.google.com/maps/place/${this.state.bars.name}/@${this.state.bars.coordinates.latitude},${this.state.bars.coordinates.longitude},16z`} target="_blank">
                <button className="secondary-btn">View on Google Maps<i className="fa fa-angle-right" id="secondary-btn-caret"></i></button>
              </a>
            </div>
            <div className="randomizer">
              <h2>Need another option?</h2>
              <button className="standard-btn" onClick={this.selectNewBar.bind(this)}>Find another bar.</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BarResult;
