import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions/authenicationActions';
import {alertSuccess} from '../actions/alertActions';
import {Redirect} from 'react-router-dom';
import {FormGroup, FormControl, ControlLabel, Button, Alert} from 'react-bootstrap';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", inputErrorMessage: "Username must be between 6-12 characters long and alphanumeric.", fetchErrorMessage: "", currentErrorMessage: null, lastBadUsername: null};
    this.formInputRef = React.createRef();
  }

  componentDidUpdate() {
    if (!this.props.signedIn) {
      if (this.formInputRef.current.props.validationState === "error" && !this.state.currentErrorMessage){
        if (!this.isValidFormat()) {
          this.setState({currentErrorMessage: this.state.inputErrorMessage});
        } else {
          this.setState({currentErrorMessage: this.state.fetchErrorMessage});
        }
      } else if ((this.formInputRef.current.props.validationState === "success" || this.formInputRef.current.props.validationState === null) && this.state.currentErrorMessage) {
        this.setState({currentErrorMessage: null});
      }
    } else {
      this.props.alertSuccess(`Welcome back, ${this.props.username}!`)
    }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  isValidFormat = () => this.state.username.length >= 6 && this.state.username.length <= 12 && !this.state.username.match(/[^A-Za-z0-9]/);

  isEqualBadName = () => this.state.username === this.state.lastBadUsername;

  checkValidation = () => {
    if (this.isValidFormat() && !this.isEqualBadName()) {
      return "success";
    } else if (this.state.username.length > 0) {
      return "error";
    } else {
      return null;
    }
  }

  handleRegister = () => {
    if (this.formInputRef.current.props.validationState === "success" || (this.state.currentErrorMessage === "Username not found.")) {
      fetch('/register', {method: "POST", body: JSON.stringify({user:{username: this.state.username}}), headers: {'Content-Type': 'application/json'}}).then(resp => {
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
          this.setState({fetchErrorMessage: error.message, lastBadUsername: this.state.username});
        } else {
          console.error("Error: ", error);
        }
      });
    }
  }

  handleLogin = () => {
    if (this.formInputRef.current.props.validationState === "success" || (this.state.currentErrorMessage === "Username is already taken.")) {
      fetch(`/sign-in?username=${this.state.username}`).then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Username not found.");
        }
      }).then(userInfo => this.props.signIn(userInfo)).catch(error => {
        this.setState({fetchErrorMessage: error.message, lastBadUsername: this.state.username});
      });
    }
  }

  render() {
    let redirectRoute = this.props.location.state && this.props.location.state.from ? this.props.location.state.from : "/";
    if (this.props.signedIn) {
      return  <Redirect to={redirectRoute}/>
    } else {
      return (
        <div id="sign-in-container">
          <form>
            <FormGroup ref={this.formInputRef} controlId="input-username" validationState={this.checkValidation()}>
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" name="username" onChange={this.handleInput} value={this.state.username}/>
            </FormGroup>
            {this.state.currentErrorMessage ? <Alert bsStyle="danger"><p>{this.state.currentErrorMessage}</p></Alert>: null}
            <Button className="form-button" bsSize="large" onClick={this.handleLogin}>Sign In</Button>
            <Button className="form-button" onClick={this.handleRegister}>Register</Button>
          </form>
        </div>
      ); 
    }
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
    signIn: (userInfo) => {
      dispatch(signIn(userInfo));
    },
    alertSuccess: (message) => {
      dispatch(alertSuccess(message));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInForm)