import React, { useEffect, Component } from 'react';
import firebase from "./Firebase/firebase.js"
import './App.css';
import Stateselect from './components/StateSelect';
import Title from './components/Title';

export default class App extends Component { 
    constructor() { 
        super(); 
        this.state = {
          region: '',
          countryCode: ''

        }
      }

    componentWillMount() { 
      fetch('http://ip-api.com/json/')
      .then(response => response.json())
      .then(data => {
        // console.log(data); //Also has city, longitude, and latitude
        // console.log(data.region); //This is the 2-letter state name
        // if not a US state (ie PR) i want the country code - data.countryCode
        this.setState({
          region: data.region,
          countryCode: data.countryCode
        })
      });
    }
    componentDidMount() { 
        fetch('http://localhost:3000/backToFrontConnection')
        .then(response => response.json())
        .then(data => {
          console.log(data.text);
        });

        // (() => { console.log("Hello")}, [])
    }

    render() {
      const { region, countryCode } = this.state;
      var userLocation
      if (countryCode !== "US") { 
        userLocation = countryCode
      } else {
        userLocation = region
      }
      console.log(userLocation)
        return (
            <div className="App">
                <Title name="COVID-19 Data"/>
                {this.state.region && this.state.countryCode &&
                <Stateselect location={userLocation}/>}
            </div>
          );
    }
}