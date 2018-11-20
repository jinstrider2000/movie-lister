import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchResults} from '../actions/searchActions';
import SearchResultList from '../components/SearchResultList'

class SearchContainer extends Component {
  render() {
    let output;
    if (this.props.searchPaginator) {
      output =
        <React.Fragment>
          <h2 className="text-fade-in">{`${this.props.totalResults} results for "${this.props.searchTerm}"`}</h2>
          <SearchResultList results={this.props.results} searchTerm={this.props.searchTerm}/>
        </React.Fragment>
    } else if (this.props.error){
      output = <h1>There is an error, no results</h1>;
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
    getMoreResults: (searchTerm) => dispatch(getSearchResults(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
