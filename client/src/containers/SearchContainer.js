import React from 'react';
import {Navbar, FormControl, Button} from 'react-bootstrap';

const SearchContainer = (props) => (<Navbar.Form>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-success">Search</Button>
</Navbar.Form>)

export default SearchContainer