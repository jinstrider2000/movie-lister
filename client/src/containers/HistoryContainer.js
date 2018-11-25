import React, {Component} from 'react';
import {connect} from 'react-redux';
import HistoryList from '../components/HistoryList';
import {loadHistory, removeHistory} from '../actions/historyActions';
import loadingGif from '../assets/images/loading.gif';

class HistoryContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: true, error: false}
  }
  

  componentDidMount() {

  }
  
  render() {
    let output
    if(this.state.loading){
      output = <img id="loading-main" src={loadingGif} alt="loading..."/>
    } else if (this.props.retrieved && this.props.history.length > 0 ) {
      output = <React.Fragment>
          <h2>History</h2>
          <HistoryList/>
        </React.Fragment>
    } else if (this.props.retrieved && this.props.history.length === 0) {
      output = <h3>No History</h3>
    } else {
      output = <h3 className="error-message">Sorry, an error occurred</h3>
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