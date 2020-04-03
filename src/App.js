import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Thetopper from './Components/Thetopper';

class App extends Component {
  static defaultProps = {
    clientID: 'adPowHSgvC2MiQiZnmgv0mLXG1gnx66q',
    domain: 'dev-4k-3rwkf.auth0.com'
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
