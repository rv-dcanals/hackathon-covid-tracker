import React, { Component } from 'react';
// import firebase from "./Firebase/firebase"
import './App.css';
import StateSelect from './Components/StateSelect';
import Title from './Components/Title';


export default class App extends Component { 
    constructor() { 
      super(); 
      this.state = {
        region: '',
        countryCode: ''
      }
    }

    /*
     * Sends a post request using the state values to the backend
     * where the values are updated accordingly
     * 
     * @param endpoint = the endpoint of the post request 
     * @param value = an optional value to send alongside the request. Can simply be an empty string
     */
    updateValue = (endpoint, value) => {
      fetch('http://localhost:3000/' + endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            country: this.state.countryCode, 
            region: this.state.region,
            value: value
          }
        )
      })
      .then(response => response.json());
    };

    componentWillMount() { 
      fetch('http://ip-api.com/json/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          region: data.region,
          countryCode: data.countryCode
        });
        this.updateValue('updateVisits', '');
      });
    }
    componentDidMount() { 
    }

    render() {
      const { region, countryCode } = this.state;
      var userLocation
      if (countryCode !== "US") { 
        userLocation = countryCode
      } else {
        userLocation = region
      }
      return (
      <div className="App">
          <Title name="COVID-19 Data"/>
          <div className="body">
          {(this.state.region || this.state.countryCode) &&
          <StateSelect location={userLocation}/>}
          </div>
      </div>
    );
  }
}
