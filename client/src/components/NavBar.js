import React from 'react';
import SearchBar from './SearchBar';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import brandReel from '../assets/images/brand_reel.png';

const NavBar = ({signedIn, signOut ,username}) => {
  let variableDisplay
  if (signedIn) {
    variableDisplay = <React.Fragment>
        <SearchBar/>
        <NavDropdown title={username} pullRight>
          <li role="presentation" className={location.pathname === "/history" ? "active" : ""}><Link to="/history" role="menuitem" tabIndex="-1">History</Link></li>
          <MenuItem onClick={(event) => {event.preventDefault(); signOut();}}></MenuItem>
        </NavDropdown>
      </React.Fragment>
  } else {
    variableDisplay = <Nav pullRight>
      <li role="presentation" className={location.pathname === "/history" ? "active" : ""}><Link to="/sign-in" role="menuitem">Sign-In/Register</Link></li>
    </Nav>
  }
  return (
    <Navbar inverse collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">M<img id="brand-reel" alt="o-reel" src={brandReel}/>vieLister</Link>
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