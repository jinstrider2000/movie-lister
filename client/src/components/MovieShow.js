import React from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movie'

const MovieShow = (props) =>
  (
    <React.Fragment>
      <Route exact path={props.match.url} render={() => (<h3>Please search for a movie above</h3>)}/>
      <Route path={`${props.match.url}/:imdbId`} render={(routerProps) => <Movie searchHappening={props.searchHappening} {...routerProps}/>}/>
    </React.Fragment>
  );

export default MovieShow;