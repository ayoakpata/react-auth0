import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Thetopper from './Components/Thetopper';

class App extends Component {
  static defaultPops = {
    clientId: '',
    domain: ''
  };

  render() {
    return (
      <div className='App'>
        <Thetopper />
        <div>
          <Github />
        </div>
      </div>
    );
  }
}

export default App;
