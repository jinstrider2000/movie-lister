import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HistoryContainer from './HistoryContainer';
import SearchContainer from './SearchContainer'
import Movie from '../components/Movie';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import SignInForm from '../components/SignInForm';
import '../assets/stylesheets/App.css';

class App extends Component {

  searchHappening = () => this.props.searchActivity || this.props.searchError; 

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar signedIn={this.props.signedIn} username={this.props.username}/>
          <main className="text-center">
            <SearchContainer/>
            <Switch>
              <Route exact path="/" render={(routerProps) => <Home searchHappening={this.searchHappening} {...routerProps}/>}/>
              <Route exact path="/sign-in" render={(routerProps) => <SignInForm/>}></Route>
              <Route exact path="/history" render={(routerProps) => <HistoryContainer searchHappening={this.searchHappening} {...routerProps}/>}/>
              <Route path="/movie/:imdbId" render={(routerProps) => <Movie searchHappening={this.searchHappening} {...routerProps}/>}/>
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
    searchError: state.searchResults.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
