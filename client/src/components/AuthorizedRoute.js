import React, {Component} from 'react';
import {connect} from 'react-redux';
import {alertWarning} from '../actions/alertActions';
import {Route, Redirect} from 'react-router-dom';

class AuthorizedRoute extends Component {

  componentDidMount() {
    if (!this.props.signedIn) {
      this.props.alertWarning("To view the requested page, please sign in.");
    }
  }

  render() {
    const {component: Component, componentProps, alertWarning, signedIn, ...routeProps} = this.props
    return (
      <Route
        {...routeProps}
        render={routerProps =>
          signedIn ? (
            <Component {...componentProps} {...routerProps} />
          ) : (
            <Redirect to={{pathname: "/sign-in", state: {from: routerProps.location}}}/>
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.signedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alertWarning: (message) => {
      dispatch(alertWarning(message));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorizedRoute);