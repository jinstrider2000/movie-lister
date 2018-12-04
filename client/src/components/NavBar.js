import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import {signOut} from '../actions/authenicationActions';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {alertSuccess} from '../actions/alertActions';
import brandReel from '../assets/images/brand_reel.png';

class NavBar extends Component {

  handleSignOut = (event) => {
    event.preventDefault();
    this.props.alertSuccess("You've signed out, come back soon!")
    this.props.signOut();
  }

  render() {
    let variableDisplay
    if (this.props.signedIn) {
      variableDisplay = <React.Fragment>
        <SearchBar/>
        <Nav pullRight>
          <NavDropdown id="user-menu" title={this.props.username}>
            <LinkContainer to="/history">
              <MenuItem>History</MenuItem>
            </LinkContainer>
            <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      </React.Fragment>
    } else {
      variableDisplay = <Nav pullRight>
        <LinkContainer to="/sign-in">
          <NavItem>Sign In/Register</NavItem>
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
  
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.signedIn,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
    alertSuccess: (message) => {
      dispatch(alertSuccess(message));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));