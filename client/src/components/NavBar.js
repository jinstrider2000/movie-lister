import React from 'react';
import SearchBar from '../containers/SearchBar';
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
      <SearchBar/>
    </Navbar>
  );
}

export default NavBar;