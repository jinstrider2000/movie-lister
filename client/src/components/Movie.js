import React, {Component} from 'react';
import {connect} from 'react-redux';
import {client} from '../imdb-api-client/client';
import {addHistory} from '../actions/historyActions';
import metaCriticImg from "../assets/images/metacritic.svg.png"
import posterPlaceHolder from '../assets/images/film-poster-placeholder.png';
import loadingGif from '../assets/images/loading.gif';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {info: {}, loading: true, error: false, errorMessage: ""};
    this.movieContainerRef = React.createRef();
  }

  searchHappening = () => this.props.searchActivity || this.props.searchError;

  backgroundfadeIfSearching = () => this.searchHappening() ? "background-fade" : ""

  getMovieInfo = () => {
    client.get({id: this.props.match.params.imdbId}).then(movieInfo => this.setState({info: movieInfo, loading: false, error: false})).catch(error => this.setState({loading: false, info: {}, error: true, errorMessage: error.message}));
  }
  
  componentDidMount() {
    this.getMovieInfo();
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.imdbId !== prevProps.match.params.imdbId) {
      this.setState({loading: true});
      this.getMovieInfo();
    }
    else if (this.props.searchActivity !== prevProps.searchActivity || this.props.searchError !== prevProps.searchError) {
      if ((this.props.searchActivity || this.props.searchError) && !this.state.loading & !this.state.error) {
        this.movieContainerRef.current.classList.add("background-fade");
      } else {
        this.movieContainerRef.current.classList.remove("background-fade", "movie-slide-in");
      }
    }
  }

  render() {
    let output;
    if (this.state.loading) {
      output = <img id="loading-movie-details" src={loadingGif} alt="loading..." className={this.props.searchActivity || this.props.searchError ? "background-fade": null}/>
    } else if (this.state.error) {
      output = <h3 className={`error-message ${this.backgroundfadeIfSearching()}`}>Error: {this.state.errorMessage}</h3>
    } else {
      output = 
        <div id="movie-details" className="main-abs-ps movie-slide-in" ref={this.movieContainerRef}>
          <img id="movie-poster" src={this.state.info.poster !== "N/A" ? this.state.info.poster : posterPlaceHolder} alt="Movie Poster"/>
          <h1>{this.state.info.title}</h1>
          {this.state.info.production !== "N/A" ? <h2>(A {this.state.info.production} Release)</h2> : null }
          {this.state.info.director !== "N/A" ? <React.Fragment><h3>Directed by</h3><p className="movie-detail">{this.state.info.director}</p></React.Fragment> : null}
          {this.state.info.writer !== "N/A" ? <React.Fragment><h3>Written by</h3><p className="movie-detail">{this.state.info.writer}</p></React.Fragment> : null}
          {this.state.info.actors !== "N/A" ? <React.Fragment><h3>Starring</h3><p className="movie-detail">{this.state.info.actors}</p></React.Fragment> : null}
          {this.state.info.plot !== "N/A" ? <React.Fragment><h3>Synopsis</h3><p className="movie-detail" id="synopsis">{this.state.info.plot}</p></React.Fragment> : null}
          {this.state.info.rated !== "N/A" ? <React.Fragment><h3>MPAA Rating</h3><p className="movie-detail">{this.state.info.rated}</p></React.Fragment> : null}
          {this.state.info.genres !== "N/A" ? <React.Fragment><h3>Genre(s)</h3><p className="movie-detail">{this.state.info.genres}</p></React.Fragment> : null}
          {this.state.info.runtime !== "N/A" ? <React.Fragment><h3>Running Time</h3><p className="movie-detail">{this.state.info.runtime}</p></React.Fragment> : null}
          {this.state.info.released !== undefined ? <React.Fragment><h3>Released</h3><p className="movie-detail">{this.state.info.released.toLocaleDateString()}</p></React.Fragment> : null}
          {this.state.info.awards !== "N/A" ? <React.Fragment><h3>Awards</h3><p className="movie-detail">{this.state.info.awards}</p></React.Fragment> : null}
          {this.state.info.metascore !== "N/A" ? <React.Fragment><img id="metacritic-logo" src={metaCriticImg} alt="Metacritic Logo"/><h3>Metacritic Score</h3><p className="movie-detail">{this.state.info.metascore}</p></React.Fragment> : null}
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