export const loadHistory = (userId) => {
  return (
    (dispatch, getState) => {
      if (!getState().historyInfo.retreived) {
        fetch(`/users/${userId}/history`).then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('User not found');
          }
        }).then(historyList => dispatch({type: "LOAD_HISTORY", payload: historyList})).catch(error => console.error('Error: ', error));
      }
    }
  )
};

export const addHistory = (userId, {title, imdbid}) => {
  return (
    (dispatch, getState) => {
      if (!getState().historyInfo.history.find(historyItem => historyItem.imdbid === imdbid)) {
        fetch(`/users/${userId}/history`, {method: "POST", body: {title, imdbid} , headers: {'Content-Type': 'application/json'}}).then(response => {
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

export const removeHistory = (userId, historyId) => {
  return (
    (dispatch) => {
      fetch(`/users/${userId}/history/${historyId}`, {method: "DELETE"}).then(response => {
        if (response.ok) {
          dispatch({type: "DELETE_HISTORY", id: historyId});
        } else {
          throw new Error("User not found");
        }
      }).catch(error => console.error('Error: ', error));
    }
  )
};