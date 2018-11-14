import React from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movie'

const MovieShow = (props) =>
  (
    <div id="movie-details">
      <Route exact path={props.match.url} render={() => (<h3>Please search for a movie above</h3>)}/>
      <Route path={`${props.match.url}/:imdbId`} component={Movie}/>
    </div>
  );

export default MovieShow;