import React, {Component} from 'react';
import {connect} from 'react-redux';
import {client} from '../imdb-api-client/client';
import {addHistory} from '../actions/historyActions';
import Transparency from '../components/Transparency';
import metaCriticImg from "../assets/images/metacritic.svg.png"
import posterPlaceHolder from '../assets/images/film-poster-placeholder.png';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {info: {}, loading: true, error: false, errorMessage: ""};
  }
  
  componentDidMount() {
    client.get({id: this.props.match.params.imdbId}).then(movieInfo => this.setState({info: movieInfo, loading: false, error: false})).catch(error => this.setState({loading: false, info: {}, error: true, errorMessage: error.message}));
  }

  render() {
    let output;
    if (this.state.loading) {
      output = <h3 className="text-center">Loading...</h3>
    } else if (this.state.error) {
      output = <h3 className="error-message">Error: {this.state.errorMessage}</h3>
    } else {
      output = 
        <div id="movie-details" className="main-abs-ps movie-slide-in-container">
          <Transparency id="transparency-search-results" condition={this.props.searchActivity || this.props.searchError} classes="background-fade"/>
          <Transparency id="transparency-movie-info" condition={true} classes="movie-slide-in-transparency"/>
          <img id="movie-poster" src={this.state.info.poster !== "N/A" ? this.state.info.poster : posterPlaceHolder} alt="Movie Poster"/>
          <h1>{this.state.info.title}</h1>
          {this.state.info.production !== "N/A" ? <h2>(A {this.state.info.production} Release)</h2> : null }
          <h3>Directed by</h3>
          <h4>{this.state.info.director}</h4>
          <h3>Written by</h3>
          <h4>{this.state.info.writer}</h4>
          <h3>Starring</h3>
          <h4>{this.state.info.actors}</h4>
          <h3>Synopsis</h3>
          <h4>{this.state.info.plot}</h4>
          <h3>MPAA Rating</h3>
          <h4>{this.state.info.rated}</h4>
          <h3>Genre(s)</h3>
          <h4>{this.state.info.genres}</h4>
          <h3>Running Time</h3>
          <h4>{this.state.info.runtime}</h4>
          <h3>Released</h3>
          <h4>{typeof(this.state.info.released) === "string" ? this.state.info.released : this.state.info.released.toLocaleDateString() }</h4>
          <h3>Awards</h3>
          <h4>{this.state.info.awards}</h4>
          <img id="metacritic-logo" src={metaCriticImg} alt="Metacritic Logo"/>
          <h3>Metacritic Score</h3>
          <h4>{this.state.info.metascore}</h4>
      </div>
    }
    return output;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    searchActivity: state.searchResults.currentSearchPaginator,
    searchError: state.searchResults.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHistory: (userId, movieInfo) => dispatch(addHistory(userId, movieInfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie)