import React, {Component} from 'react';
import {client} from '../imdb-api-client/client';
import metaCriticImg from "../assets/images/metacritic.svg.png"

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
        <React.Fragment>
          <img id="movie-poster" src={this.state.info.poster} alt="Movie Poster"/>
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
          <h3>Released</h3>
          <h4>{typeof(this.state.info.released) === "string" ? this.state.info.released : this.state.info.released.toLocaleDateString() }</h4>
          <h3>Awards</h3>
          <h4>{this.state.info.awards}</h4>
          <img id="metacritic-logo" src={metaCriticImg} alt="Metacritic Logo"/>
          <h3>Metacritic Score</h3>
          <h4>{this.state.info.metascore}</h4>
      </React.Fragment>
    }
    return output;
  }
}

export default Movie