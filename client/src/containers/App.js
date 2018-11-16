import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HistoryContainer from './HistoryContainer';
import SearchContainer from './SearchContainer'
import MovieShow from '../components/MovieShow';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import '../assets/css/App.css';

class App extends Component {

  signedIn = () => !!this.props.userId;

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <main className="text-center">
            <SearchContainer/>
            <div id="transparency" className={this.props.searchResults || this.props.searchError ? "background-fade-in": null}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/history" component={HistoryContainer}/>
                <Route path="/movie" component={MovieShow}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    searchResults: state.searchResults.results,
    searchError: state.searchResults.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
