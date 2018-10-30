// RETRIEVE_HISTORY, ADD_HISTORY, REMOVE_HISTORY

export default (state = {history: [], loading: false}, action) => {
  switch (action.key) {
    case "LOADING_HISTORY":
      return;
    case "RETRIEVE_HISTORY":
      return;
    case "ADD_HISTORY":
      return;
    case "REMOVE_HISTORY":
      return;
    default:
      return state;
  }
}