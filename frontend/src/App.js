import React, { useEffect } from 'react';
import firebase from "./Firebase/firebase.js"
import logo from './logo.svg';
import './App.css';
import Stateselect from './components/StateSelect';
import Title from './components/Title';



const verifyUserExists = () => {
  console.log("I'm here")
  firebase.database()
  .ref("users")
  .on('value', (snapshot) => {
    let userObj = snapshot.val()
    console.log("here", userObj)
  });
}

const test = () => {
  console.log("In test")
  firebase.database()
  .ref("other_field")
  .set({
    // name: "Seba",
    // last: "Canals",
    // item1: "0",
    // item2: "dog",
    item3: "dragon"
  });
}

function App() {

  //Testing backend to frontend connection
  useEffect(() => {
    fetch('http://localhost:3000/backToFrontConnection')
      .then(response => response.json())
      .then(data => {
        console.log(data.text);
      });
  })

  //Connect to firebase
  useEffect (() => {
    console.log("Hello")
    verifyUserExists()
    test()
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
        <Title name="COVID Tracker"/>
        <Stateselect name="hello"/>
    </div>
  );
}

export default App;
