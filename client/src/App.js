import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/history" component={SearchHistory}/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
