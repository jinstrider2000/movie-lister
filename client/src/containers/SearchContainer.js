import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getSearchResults} from '../actions/searchActions';
import SearchResultList from '../components/SearchResultList'

class SearchContainer extends Component {
  render() {
    return (
      <div>SearchContainer</div>
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
