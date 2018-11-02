import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import HistoryList from '../components/HistoryList';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import '../css/App.css';
const imdb = require('imdb-api');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/history" component={HistoryList}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;