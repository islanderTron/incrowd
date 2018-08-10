import React, { Component } from 'react';
import './components/publishers';
import Publisher from './components/publishers';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Publisher/>
      </div>
    );
  }
}

export default App;
