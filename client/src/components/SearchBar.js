import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, FormControl} from 'react-bootstrap';
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

  render() {
    return (
      <Navbar.Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
      </Navbar.Form>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResults: searchTerm => 
    dispatch(getSearchResults(searchTerm)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);