import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, FormControl} from 'react-bootstrap';
import { getSearchResults, clearSearch } from '../actions/searchActions';
let searchTimeOut = null;

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
  }

  updateSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value});
    if(!searchTimeOut) {
      searchTimeOut = setTimeout(() => {
        if (this.state.searchTerm !== "") {
          this.props.getSearchResults(this.state.searchTerm); 
        } else {
          this.props.clearSearch();
        }
        searchTimeOut = null;
      }, 1000);
    } else if (event.target.value === "") {
      clearInterval(searchTimeOut);
      searchTimeOut = null;
      this.props.clearSearch();
    }
  }

  render() {
    return (
      <Navbar.Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
      </Navbar.Form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentSearchPaginator: state.searchResults.currentSearchPaginator
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