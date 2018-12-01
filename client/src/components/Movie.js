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

  getMovieInfo = () => {
    client.get({id: this.props.match.params.imdbId}).then(movieInfo => {
      this.setState({info: movieInfo, loading: false, error: false});
      this.props.addHistory(this.props.userId, movieInfo);
    }).catch(error => this.setState({loading: false, info: {}, error: true, errorMessage: error.message}));
  }
  
  componentDidMount() {
    this.getMovieInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.imdbId !== prevProps.match.params.imdbId) {
      this.setState({loading: true, info: {}, error: false});
      setTimeout(this.getMovieInfo, 200);
    }
    else if (this.movieContainerRef.current && (this.props.searchActivity !== prevProps.searchActivity || this.props.searchError !== prevProps.searchError)) {
      if (this.props.searchHappening()) {
        this.movieContainerRef.current.classList.replace("main-abs-ps-front", "main-abs-ps-back");
        this.movieContainerRef.current.classList.add("background-fade");
      } else {
        this.movieContainerRef.current.classList.replace("main-abs-ps-back", "main-abs-ps-front");
        this.movieContainerRef.current.classList.remove("background-fade", "movie-slide-in");
      }
    }
  }

  render() {
    let output;
    if (this.state.loading) {
      output = <div className="main-abs-ps-back"><img id="loading-main" src={loadingGif} alt="loading..." className={this.props.searchHappening() ? "background-fade": ""}/></div>
    } else if (this.state.error) {
      output = <div className="main-abs-ps-back error-message"><h3 className={this.props.searchHappening() ? "background-fade": ""}>Error: {this.state.errorMessage}</h3></div>
    } else {
      output = 
        <div id="movie-details" className="main-abs-ps-front movie-slide-in" ref={this.movieContainerRef}>
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