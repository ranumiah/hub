import React from 'react';
import logo from './logo.svg';
import './App.css';

import BoxContainer from "./BoxContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <BoxContainer />
    </div>
  );
}

export default App;
