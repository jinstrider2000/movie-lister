import React from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movie'

const MovieShow = (props) =>
  (
    <React.Fragment>
      <Route exact path={props.match.url} render={() => (<h3>Please search for a movie above</h3>)}/>
    </React.Fragment>
  );

export default MovieShow;