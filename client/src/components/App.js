import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import HistoryList from './HistoryList';
import '../css/App.css'; 

const App = (props) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/history" component={HistoryList}/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
