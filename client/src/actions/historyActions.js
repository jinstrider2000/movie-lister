const startLoad = () => ({type: "START_LOAD"});

const loadHistory = (userId, component) => {
  return (
    (dispatch) => {
      fetch(`/users/${userId}/history`).then(response => {
        component.setState({loading: false});
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('User not found');
        }
      }).then(historyList => dispatch({type: "LOAD_HISTORY", payload: historyList})).catch(error => console.error('Error: ', error));
    }
  )
};

const addHistory = (userId, {title, imdbid, poster, year}) => {
  return (
    (dispatch, getState) => {
      if (!getState().historyInfo.history.find(historyItem => historyItem.imdbid === imdbid)) {
        fetch(`/users/${userId}/history`, {method: "POST", body: JSON.stringify({title, imdbid, poster, year}) , headers: {'Content-Type': 'application/json'}}).then(response => {
          if (response.status === 201) {
            return response.json();
          } else if (response.status === 200) {
            return console.log("Movie already in history.");
          } else {
            throw new Error("User not found");
          }
        }).then(response => {
          if (typeof(response) === "object") {
            dispatch({type: "ADD_HISTORY", payload: response});
          }
        }).catch(error => console.error('Error: ', error));
      }
    }
  )
};

const removeHistory = (userId, historyId) => {
  return (
    (dispatch) => {
      fetch(`/users/${userId}/history/${historyId}`, {method: "DELETE"}).then(response => {
        if (response.ok) {
          dispatch({type: "DELETE_HISTORY", id: historyId});
        } else {
          throw new Error("User or history item not found");
        }
      }).catch(error => console.error('Error: ', error));
    }
  )
};

export {startLoad, loadHistory, addHistory, removeHistory};