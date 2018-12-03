import React, {Component} from 'react';
import {connect} from 'react-redux';
import HistoryList from '../components/HistoryList';
import {startLoad, loadHistory, removeHistory} from '../actions/historyActions';
import loadingGif from '../assets/images/loading.gif';

class HistoryContainer extends Component {

  componentDidMount() {
    if (!this.props.retrieved) {
      this.props.startLoad();
      this.props.loadHistory(this.props.userId, this);
    }
  }

  removeHistoryEntry = (userId, historyId) => {
    document.getElementById(`history-${historyId}`).classList.add("fade-out");
    setTimeout(this.props.removeHistory.bind(null, userId, historyId), 600);
  }
  
  render() {
    let output
    if(this.props.loading) {
      output = <img id="loading-main" src={loadingGif} alt="loading..."/>
    } else if (this.props.retrieved && this.props.history.length > 0 ) {
      output = <React.Fragment>
          <HistoryList deleteHistory={this.removeHistoryEntry} history={this.props.history} userId={this.props.userId}/>
        </React.Fragment>
    } else if (this.props.retrieved && this.props.history.length === 0) {
      output = <h3>No History</h3>
    } else if (this.props.error) {
      output = <h3 className="error-message">{this.props.errorMessage}</h3>
    } else {
      output = null;
    }
    return (
      <div id="history-container" className={this.props.searchHappening() ? "main-abs-ps-back background-fade" : ""}>
        {output}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    history: state.historyInfo.history,
    retrieved: state.historyInfo.retrieved,
    loaded: state.historyInfo.loading,
    error: state.historyInfo.error,
    errorMessage: state.historyInfo.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLoad: () => {
      dispatch(startLoad());
    },
    loadHistory: (userId, component) => {
      dispatch(loadHistory(userId,component));
    },
    removeHistory: (userId, historyId) => {
      dispatch(removeHistory(userId, historyId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)