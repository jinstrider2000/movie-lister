// import React from 'react';

// const MovieContainer = (props) => (<div>MovieContainer</div>)

// export default MovieContainer
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import { getSearchResults, clearSearch } from '../actions/searchActions';
import SearchContainer from './SearchContainer'
import Movie from '../components/Movie'

class MovieContainer extends Component {

  render() {
    return (
      <div id="movie-container">
        <Route exact path={this.props.match.url} render={() => (<h3>Please search for a movie</h3>)}/>
        <Route path={`${this.props.match.url}/:imdbId`} render={routerProps => <Movie movieInfo={this.props.movieInfo} {...routerProps}/>}/>
        <SearchContainer/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    movieInfo: state.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResults: searchTerm => 
    dispatch(getSearchResults(searchTerm)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);