import React from 'react';
// import logo from './logo.svg';
import Title from "./components/Title";
import './App.css';
import Stateselect from './components/StateSelect';

function App() {

  return (
    <div className="App">
        <Title name="COVID Tracker"/>
        <Stateselect name="hello"/>
    </div>
  );
}

export default App;
