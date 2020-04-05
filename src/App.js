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
  //user not signed in
  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', authResult => {
      //console.log(authResult);

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        //console.log(profile);
        this.setProfile(authResult.idToken, profile);
      });
    });
    //user signed in. get profile
    this.getProfile();
  }

  setProfile(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile() {
    if (localStorage.getItem('idToken') != null) {
      this.setState(
        {
          idToken: localStorage.getItem('idToken'),
          profile: JSON.parse(localStorage.getItem('profile'))
        },
        () => {
          console.log(this.state);
        }
      );
    }
  }

  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState(
      {
        idToken: '',
        profile: ''
      },
      () => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('profile');
      }
    );
  }

  render() {
    let loggedIn;

    if (this.state.idToken) {
      loggedIn = <Github />;
    } else {
      loggedIn = 'please log in';
    }
    return (
      <div className='App'>
        <Thetopper
          lock={this.lock}
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogout={this.logout.bind(this)}
          onLogin={this.showLock.bind(this)}
        />
        {loggedIn}
      </div>
    );
  }
}

export default App;
