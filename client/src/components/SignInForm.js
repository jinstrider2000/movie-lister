import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions/authenicationActions';
import {FormGroup, FormControl, ControlLabel, Button, Alert} from 'react-bootstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", alertMessage: "", fetchError: false, inputError: false, lastBadUsername: ""};
    this.formInputRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.formInputRef.current.props.validationState === "error" && !this.state.inputError) {
      this.setState({alertMessage: "Username must be between 6-12 characters long and alphanumeric.", inputError: true});
    } else if ((this.formInputRef.current.props.validationState === "success" || this.formInputRef.current.props.validationState === null) && this.state.inputError) {
      this.setState({alertMessage: "", inputError: false});
    }
  }

  handleInput = (event) => {
    if (this.state.fetchError && event.target.value !== this.state.lastBadUsername) {
      this.setState({[event.target.name]: event.target.value, fetchError: false});
    } else {
    this.setState({[event.target.name]: event.target.value});
    }
  }

  checkValidation = () => {
    const length = this.state.username.length;
    const content = this.state.username;
    if (length >= 6 && length <= 12 && !content.match(/[^A-Za-z0-9]/)) {
      return "success";
    } else if (length > 0) {
      return "error";
    } else {
      return null;
    }
  }

  handleRegister = () => {
    if (this.formInputRef.current.props.validationState === "success") {
      fetch('/register', {method: "POST", body: JSON.stringify({username: this.state.username}), headers: {'Content-Type': 'application/json'}}).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          if (resp.status === 400) {
            throw new Error("Bad request body");
          } else {
            throw new Error("Username is already taken.");
          }
        }
      }).then(userInfo => this.props.signIn(userInfo)).catch(error => {
        if (error.message === "Username is already taken.") {
          this.setState({alertMessage: `${this.state.username}: error.message`, fetchError: true, lastBadUsername: this.state.username});
        } else {
          console.error("Error: ", error);
        }
      });
    }
  }

  handleLogin = () => {
    if (this.formInputRef.current.props.validationState === "success") {
      fetch(`/sign-in?username=${this.state.username}`).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Username not found.");
        }
      }).then(userInfo => this.props.signIn(userInfo)).catch(error => {
        console.error("Error: ", error);
        this.setState({alertMessage: `${this.state.username}: ${error.message}`, fetchError: true});
      });
    }
  }

  render() {
    return (
      <div id="sign-in-container">
        <form>
          <FormGroup ref={this.formInputRef} controlId="input-username" validationState={this.checkValidation()}>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" name="username" onChange={this.handleInput} value={this.state.username}/>
          </FormGroup>
          {this.state.fetchError || this.state.inputError ? <Alert bsStyle="danger"><p>{this.state.alertMessage}</p></Alert>: null}
          <Button className="form-button" bsSize="large" onClick={this.handleLogin}>Sign In</Button>
          <Button className="form-button" onClick={this.handleRegister}>Register</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userInfo) => {
      dispatch(signIn(userInfo));
    }
  }
}

export default connect(null,mapDispatchToProps)(SignInForm)