import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {alertWarning} from '../actions/alertActions';

const AuthorizedRoute = ({component: Component, componentProps, signedIn, dispatch, ...routeProps}) => {
  return (
    <Route
      {...routeProps}
      render={routerProps =>
        signedIn ? (
          <Component {...componentProps} {...routerProps} />
        ) : (
          <Redirect to="/sign-in"/>
        )
      }
    />
  );
}

export default connect()(AuthorizedRoute);