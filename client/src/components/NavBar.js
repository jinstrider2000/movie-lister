import React from 'react';
import SearchBar from './SearchBar';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import brandReel from '../assets/images/brand_reel.png';

const NavBar = () => {
  return (
    <Navbar inverse collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">M<img id="brand-reel" src={brandReel}/>vieLister</Link>
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