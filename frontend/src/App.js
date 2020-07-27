import React, { useEffect } from 'react';
// import logo from './logo.svg';
import Title from "./components/Title";
import './App.css';
import Stateselect from './components/StateSelect';

function App() {

  return (
    <div className="App">
        <Title name="Hello, world"/>
        <Stateselect/>
    </div>
  );
}

export default App;
