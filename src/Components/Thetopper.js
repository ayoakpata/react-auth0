import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Thetopper extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>searcher-logo</Navbar.Brand>
        <Nav>
          <NavItem href='#'>login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Thetopper;
