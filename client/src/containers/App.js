import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HistoryContainer from './HistoryContainer';
import SearchContainer from './SearchContainer'
import Movie from '../components/Movie';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import SignInForm from '../components/SignInForm';
import AuthorizeRoute from '../components/AuthorizedRoute';
import {dismissAlert} from '../actions/alertActions';
import {Alert} from 'react-bootstrap'
import '../assets/stylesheets/App.css';

class App extends Component {

  searchHappening = () => this.props.searchActivity || this.props.searchError; 

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar signedIn={this.props.signedIn} username={this.props.username}/>
          {this.props.alertAvailable ? <Alert id="app-alert" bsStyle={this.props.alertStyle} onDismiss={this.props.dismissAlert}>{this.props.alertMessage}</Alert> : null}
          <main className="text-center">
            <SearchContainer/>
            <Switch>
              <Route exact path="/" render={(routerProps) => <Home searchHappening={this.searchHappening} {...routerProps}/>}/>
              <Route exact path="/sign-in" component={SignInForm}></Route>
              <AuthorizeRoute exact path="/history" component={HistoryContainer} componentProps={{searchHappening: this.searchHappening}}/>
              <AuthorizeRoute path="/movie/:imdbId" component={Movie} componentProps={{searchHappening: this.searchHappening}}/>
              <Route render={(routerProps) => <NotFound searchHappening={this.searchHappening} {...routerProps}/>}/>
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    signedIn: state.user.signedIn,
    username: state.user.username,
    searchActivity: state.searchResults.currentSearchPaginator,
    searchError: state.searchResults.error,
    alertAvailable: state.alert.available,
    alertMessage: state.alert.message,
    alertStyle: state.alert.bsStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dismissAlert: () => {
      dispatch(dismissAlert());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);