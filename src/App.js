import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Thetopper from './Components/Thetopper';
import Auth0Lock from 'auth0-lock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'adPowHSgvC2MiQiZnmgv0mLXG1gnx66q',
    domain: 'dev-4k-3rwkf.auth0.com'
  };

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', authResult => {
      console.log(authResult);
    });
  }

  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className='App'>
        <Thetopper onLogin={this.showLock.bind(this)}/>
        <div>
          <Github />
        </div>
      </div>
    );
  }
}

export default App;
