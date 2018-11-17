import React from 'react';
import Transparency from './Transparency';

const Home = (props) => (
  <div className="main-abs-ps">
    <Transparency id="transparency-search-results" condition={props.searchHappening} classes="background-fade" />
    <h1>Home</h1>
  </div>
)

export default Home