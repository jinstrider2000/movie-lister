import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMoreResults, clearSearch} from '../actions/searchActions';
import SearchResultList from '../components/SearchResultList';
import throttle from 'lodash.throttle';

class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: false};
    this.searchTimeOut = null;
    this.checkIfScrolledBottomThrottled = throttle(this.checkIfScrolledBottom, 200);
  }
  

  componentDidMount() {
    window.addEventListener('scroll', this.checkIfScrolledBottomThrottled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkIfScrolledBottomThrottled);
  }

  handleResultClick = () => {
    this.props.clearSearch();
  }

  checkIfScrolledBottom = () => {
    if (this.props.searchPaginator && (this.props.totalLoaded < this.props.totalResults) && (window.pageYOffset + window.innerHeight > document.body.scrollHeight - Math.ceil(window.innerHeight/10))) {
      // this.props.getMoreResults(this.props.searchPaginator);
      console.log("Got to bottom of search, fire new async for more results");
      
    }
  }

  render() {
    let output;
    if (this.props.searchPaginator) {
      output =
        <React.Fragment>
          <h2 className="text-fade-in">{`${this.props.totalResults} results for "${this.props.searchTerm}"`}</h2>
          <SearchResultList results={this.props.results} searchTerm={this.props.searchTerm} handleResultClick={this.handleResultClick}/>
        </React.Fragment>
    } else if (this.props.error){
      output = <h2 className="text-fade-in">No results for "{this.props.searchTerm}"</h2>;
    } else {
      output = null;
    }
    return (
      <div id="search-container">{output}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.searchResults.results,
    searchTerm: state.searchResults.currentSearchTerm,
    searchPaginator: state.searchResults.currentSearchPaginator,
    totalResults: state.searchResults.totalResults,
    totalLoaded: state.searchResults.totalLoaded,
    error: state.searchResults.error,
    errorMessage: state.searchResults.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreResults: (paginator) => dispatch(getMoreResults(paginator)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
