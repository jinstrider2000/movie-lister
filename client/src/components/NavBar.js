import React from 'react';
import SearchBar from './SearchBar';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import brandReel from '../assets/images/brand_reel.png';

const handleSignOut = (event, signOutFunction) => {
  event.preventDefault();
  signOutFunction();
  <Redirect to="/"/>
}

const NavBar = ({signedIn, signOut, username}) => {
  let variableDisplay
  if (signedIn) {
    variableDisplay = <React.Fragment>
      <SearchBar/>
      <Nav pullRight>
        <NavDropdown id="user-menu" eventKey="2" title={username}>
          <LinkContainer to="/history">
            <MenuItem eventKey="2.1">History</MenuItem>
          </LinkContainer>
          <MenuItem onClick={handleSignOut.bind(null,null,signOut)} eventKey="2.2">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    </React.Fragment>
  } else {
    variableDisplay = <Nav pullRight>
      <LinkContainer to="/sign-in">
        <NavItem eventKey="1">Sign In/Register</NavItem>
      </LinkContainer>
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
        {variableDisplay}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;