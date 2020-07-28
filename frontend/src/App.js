import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //Testing backend to frontend connection
  useEffect(() => {
    fetch('http://localhost:3000/backToFrontConnection')
      .then(response => response.json())
      .then(data => {
        console.log(data.text);
      });
  }, [])

  //Gets the location
  useEffect(() => {
    fetch('http://ip-api.com/json/')
      .then(response => response.json())
      .then(data => {
        console.log(data); //Also has city, longitude, and latitude
        console.log(data.region); //This is the 2-letter state name
      });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
