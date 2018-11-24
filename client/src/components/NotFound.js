import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = (props) => (
  <div className={props.searchHappening() ? "main-abs-ps-back background-fade" : null}>
    <h1 className="error-message">404 NOT FOUND</h1>
    <br/>
    <img src="https://i.imgur.com/88Pjm53.jpg" alt="cool hand luke quote: failure to communicate"/>
    <br/>
    <h2>You can go back <Link to="/">home</Link> or check out this <Link to="/movie/tt0061512">here</Link></h2>
  </div>
)

export default NotFound