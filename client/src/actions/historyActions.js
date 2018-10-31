export const loadHistory = (userId) => {
  return (
    dispatch => {
      dispatch({type: "RETRIEVE_HISTORY"});
      fetch(`/users/${userId}/history`)
    }
  )
};
export const addHistory = (historyItem) => ({type: "ADD_HISTORY", payload: historyItem});
export const removeHistory = (imdbId) => ({type: "DELETE_HISTORY", imdb_id: imdbId});