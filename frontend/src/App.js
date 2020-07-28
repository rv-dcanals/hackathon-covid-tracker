import React, { useEffect, Component } from 'react';
import firebase from "./Firebase/firebase.js"
import './App.css';
import Stateselect from './components/StateSelect';
import Title from './components/Title';

export default class App extends Component { 
    constructor() { 
        super(); 
        this.state = {
          region: ''

        }
    }

    componentWillMount() {
      fetch('http://ip-api.com/json/')
      .then(response => response.json())
      .then(data => {
        // console.log(data); //Also has city, longitude, and latitude
        // console.log(data.region); //This is the 2-letter state name
        this.setState({
          region: data.region
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
      const { region } = this.state;
        return (
            <div className="App">
                <Title name="COVID-19 Data"/>
                <Stateselect location="CA"/>
            </div>
          );
    }
}