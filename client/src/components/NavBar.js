import React from 'react';
import {Navbar, Nav, FormControl, Button} from 'react-bootstrap';

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
      <Navbar.Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Navbar.Form>
    </Navbar>
  );
}

export default NavBar;