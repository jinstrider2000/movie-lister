import React from 'react';

const Home = (props) => {
    return (
      <div className={props.searchHappening() ? "main-abs-ps background-fade" : "main-abs-ps"}>
        <h1>Home</h1>
      </div>
    )
  }

export default Home