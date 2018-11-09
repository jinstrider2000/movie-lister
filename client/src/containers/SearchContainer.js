import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResultList from '../components/SearchResultList'

class SearchContainer extends Component {
  render() {
    return (
      <div>SearchContainer</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
