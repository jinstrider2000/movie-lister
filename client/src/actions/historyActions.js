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
  fetch(`/users/${getState().userId}/history`, {method: "POST", body: historyItem, headers: {'Content-Type': 'application/json'}}).then(response => response.json()).then()
  dispatch({type: "ADD_HISTORY", payload: historyItem})
};
export const removeHistory = (imdbId) => ({type: "DELETE_HISTORY", imdb_id: imdbId});