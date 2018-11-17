import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchResults} from '../actions/searchActions';
import SearchResultList from '../components/SearchResultList'

class SearchContainer extends Component {
  render() {
    let output;
    if (this.props.searchPaginator) {
      output = <h1>There are search results to show!</h1>
    } else if (this.props.error){
      output = <h1>There is an error, no results</h1>;
    } else {
      output = null;
    }
    return (
      <div id="search-container" className={output || this.props.error ? "text-fade-in" : null}>{output}</div>
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
    getMoreResults: (searchTerm) => dispatch(getSearchResults(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
