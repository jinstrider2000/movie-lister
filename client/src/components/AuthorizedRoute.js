import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const AuthorizedRoute = ({component: Component, componentProps, signedIn, alertWarning, ...routeProps}) => {
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

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.signedIn
  }
}

export default connect(mapStateToProps,null)(AuthorizedRoute);