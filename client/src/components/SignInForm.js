import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, Grid} from 'react-bootstrap';

const SignInForm = (props) => (
  <Grid>
    <form>
      <FormGroup controlId="input-username">
        <ControlLabel>Username</ControlLabel>
        <FormControl type="text"></FormControl>
      </FormGroup>
      <FormGroup controlId="input-password">
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password"></FormControl>
      </FormGroup>
      <Button onClick={null}>Register</Button>
      <Button onClick={null}>Sign In</Button>
    </form>
  </Grid>
)

export default SignInForm