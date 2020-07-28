import React, { useEffect } from 'react';
import firebase from "./Firebase/firebase.js"
import logo from './logo.svg';
import './App.css';
import Stateselect from './components/StateSelect';



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

  // useEffect(() => {
  //   fetch('http://localhost:3000/meta')
  //     .then(response => response.json())
  //     .then(data => console.log(data[0]));
  // }, [])

  useEffect (() => {
    console.log("Hello")
    verifyUserExists()
    test()
  }, [])

  return (
    <div className="App">
        <Title name="COVID Tracker"/>
        <Stateselect name="hello"/>
    </div>
  );
}

export default App;
