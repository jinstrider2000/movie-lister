import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, FormControl} from 'react-bootstrap';

class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
  }

  updateSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value});
    
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);