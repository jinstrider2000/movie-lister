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
          <main>
            <SearchContainer/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/history" component={HistoryContainer}/>
              <Route path="/movie" component={MovieShow}/>
              <Route component={NotFound}/>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
