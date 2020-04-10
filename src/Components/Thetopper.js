import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Thetopper extends Component {
  onLogin() {
    this.props.onLogin();
  }

  onLogout() {
    this.props.onLogout();
  }

  render() {
    let logpage;
    if (this.props.idToken) {
      logpage = (
        <NavItem onClick={this.onLogout.bind(this)} href='#'>
          logout
        </NavItem>
      );
    } else {
      logpage = (
        <NavItem onClick={this.onLogin.bind(this)} href='#'>
          login
        </NavItem>
      );
    }
    return (
      <Navbar>
        <Navbar.Brand>searcher-logo</Navbar.Brand>
        <Nav>{logpage}</Nav>
      </Navbar>
    );
  }
}

export default Thetopper;
