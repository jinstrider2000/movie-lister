import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import HistoryContainer from './HistoryContainer';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import SearchResultList from '../components/SearchResultList'
import MovieContainer from './MovieContainer';
import '../css/App.css';
window.imdb = require('imdb-api');
window.client = new window.imdb.Client({apiKey: "d7196e79"});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/history" component={HistoryContainer}/>
          <Route path="/movie" component={MovieContainer}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
