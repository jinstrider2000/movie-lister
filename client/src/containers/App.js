import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import HistoryList from '../components/HistoryList';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import SearchResultList from '../components/SearchResultList'
import MovieInfo from '../components/MovieInfo';
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
          <Route exact path="/history" component={HistoryList}/>
          <Route path="/search" component={SearchResultList}/>
          <Route path="/movie" component={MovieInfo}/>
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
