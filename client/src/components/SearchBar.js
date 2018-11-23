import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, FormControl, FormGroup} from 'react-bootstrap';
import { getSearchResults, clearSearch } from '../actions/searchActions';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
    this.searchTimeOut = null;
  }

  updateSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value});
    if(!this.searchTimeOut) {
      this.searchTimeOut = setTimeout(() => {
        if (this.state.searchTerm !== "") {
          this.props.getSearchResults(this.state.searchTerm); 
        } else {
          this.props.clearSearch();
        }
        this.searchTimeOut = null;
      }, 1000);
    } else if (event.target.value === "") {
      clearInterval(this.searchTimeOut);
      this.searchTimeOut = null;
      this.props.clearSearch();
    }
  }

  handleEnterKey = (event) => {
    if (event.key === "Enter" && this.state.searchTerm !== "" && !this.searchTimeOut && !(this.props.searchActivity || this.props.searchError)) {
      this.props.getSearchResults(this.state.searchTerm);
    }
  }

  render() {
    return (
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl id="search-bar" type="text" placeholder="Search Titles" onChange={this.updateSearchTerm} onKeyDown={this.handleEnterKey} value={this.state.searchTerm} />
        </FormGroup>
      </Navbar.Form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    searchActivity: state.searchResults.currentSearchPaginator,
    searchError: state.searchResults.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResults: searchTerm => 
    dispatch(getSearchResults(searchTerm)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);