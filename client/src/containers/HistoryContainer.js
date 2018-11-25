import React, {Component} from 'react';
import {connect} from 'react-redux';
import HistoryList from '../components/HistoryList';
import {loadHistory, removeHistory} from '../actions/historyActions';

class HistoryContainer extends Component {

  componentDidMount() {

  }
  
  render() {
    let output
    if (this.props.retrieved) {
      output = <HistoryList/>
    } else {
      output = <div></div>
    }
    return (
      <div id="history-container" className={this.props.searchHappening() ? "main-abs-ps-back background-fade" : ""}>
        <HistoryList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    history: state.historyInfo.history,
    retrieved: state.historyInfo.retrieved
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHistory: (userId) => {
      dispatch(loadHistory(userId));
    },
    removeHistory: (userId, historyId) => {
      dispatch(removeHistory(userId, historyId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)