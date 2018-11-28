import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions/authenicationActions';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleRegister = () => {
    if (condition) {
      
    } else {
      
    }
    fetch('/users', {method: "POST", body:{...this.state}, headers: {'Content-Type': 'application/json'}})
  }

  handleLogin = () => {

  }

  render() {
    return (
      <div id="sign-in-container">
        <form>
          <FormGroup controlId="input-username">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" name="username" onChange={this.handleInput} value={this.state.username}/>
          </FormGroup>
          <Button className="form-button" bsSize="large" onClick={null}>Sign In</Button>
          <Button className="form-button" onClick={null}>Register</Button>
        </form>
      </div>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => {
      dispatch(signIn());
    }
  }
}

export default SignInForm