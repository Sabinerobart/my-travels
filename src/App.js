import React, { Component } from 'react';
import logo from './logo.svg';
import img1 from './49c069bb-8a54-4ded-81f0-e463ef6c66da.hw1.jpeg';
import img2 from './1280px-1_bali_rice_terrace_2011.jpeg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels
          destination="Phoenix, Arizona"
          country="U.S.A"
          photo={img1}
          distance="8724 kilometers"
        />
        <Travels
          destination="Bali"
          country="Indonesia"
          photo={img2}
          distance="12288 kilometers"
        />
      </div>
    );
  }
}

export default App;
