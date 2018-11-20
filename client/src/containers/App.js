import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HistoryContainer from './HistoryContainer';
import SearchContainer from './SearchContainer'
import MovieShow from '../components/MovieShow';
import Movie from '../components/Movie';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import '../assets/stylesheets/App.css';

class App extends Component {

  signedIn = () => !!this.props.userId;
  searchHappening = () => this.props.searchActivity || this.props.searchError; 

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <main className="text-center">
            <SearchContainer/>
            <Switch>
              <Route exact path="/" render={(routerProps) => <Home searchHappening={this.searchHappening} {...routerProps}/>}/>
              <Route exact path="/history" component={HistoryContainer}/>}/>
              <Route exact path="/movie" render={(routerProps) => <MovieShow searchHappening={this.searchHappening} {...routerProps}/>}/>
              <Route path="/movie/:imdbId" render={(routerProps) => <Movie {...routerProps}/>}/>
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
    searchActivity: state.searchResults.currentSearchPaginator,
    searchError: state.searchResults.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
