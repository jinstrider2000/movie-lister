import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Brand>Movie Lister</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/history">History</Navbar.Link>
        </Nav> 
      </Navbar.Collapse>
      <SearchContainer/>
    </Navbar>
  );
}

export default NavBar;