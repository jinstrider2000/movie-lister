import React from 'react';
import SearchBar from './SearchBar';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar inverse collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Movie Lister</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <SearchBar/>
        <Nav pullRight>
          <NavItem eventKey={1} href="/history">
            History
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;