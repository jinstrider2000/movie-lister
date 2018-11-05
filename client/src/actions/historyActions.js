export const loadHistory = () => {
  return (
    (dispatch, getState) => {
      if (!getState().retreived) {
        fetch(`/users/${getState().userId}/history`).then(response => {
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

export const addHistory = () => {
  return (
    (dispatch, getState) => {
      if (!getState.history.find((historyItem) => historyItem.imdb_id === getState.movie.imdbId)) {
        fetch(`/users/${getState().userId}/history`, {method: "POST", body: historyItem, headers: {'Content-Type': 'application/json'}}).then(response => {
          if (response.status === 201) {
            return response.json();
          } else if (response.status === 200) {
            return console.log("Movie already in history.");
          } else {
            throw new Error("User not found")
          }
        }).then(response => {
          if (typeof(response) === object) {
            dispatch({type: "ADD_HISTORY", payload: response});
          }
        }).catch(error => console.error('Error: ', error));
      } 
    }
  )
};

export const removeHistory = (imdbId) => ({type: "DELETE_HISTORY", imdb_id: imdbId});