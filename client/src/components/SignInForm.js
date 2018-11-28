import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div id="sign-in-container">
        <form>
          <FormGroup controlId="input-username">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" name="username" onChange={this.handleInput} value={this.state.username}/>
          </FormGroup>
          <Button onClick={null}>Register</Button>
          <Button onClick={null}>Sign In</Button>
        </form>
      </div>
    )
  }
  
}

export default SignInForm