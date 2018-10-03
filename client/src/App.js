import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar/>
        <br/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/actors" component={Actors}/>
        <Route exact path="/directors" component={Directors}/>
        <Route exact path="/movies" component={Movies}/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
