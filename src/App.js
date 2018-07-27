import React, { Component } from 'react';
import logo from './img/logo.svg';
import MenuAppBar from './MenuAppBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
