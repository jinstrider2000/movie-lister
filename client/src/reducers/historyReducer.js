// RETRIEVE_HISTORY, LOAD_HISTORY, ADD_HISTORY, REMOVE_HISTORY

export default (state = {history: [], retrieved: false}, action) => {
  switch (action.type) {
    case "RETRIEVE_HISTORY":
      if (state.retrieved === false) {
        return {...state, retrieved: true};
      } else {
        return state;
      }
    case "LOAD_HISTORY":
      return {...state, history: action.payload};
    case "ADD_HISTORY":
      return {...state, history: [...state.history, action.payload]};
    case "REMOVE_HISTORY":
      return {...state, history: state.history.filter(historyItem => historyItem.imdb_id !== action.imdb_id)};
    case "SIGN_OUT":
      return {...state, history: [], retrieved: false}
    default:
      return state;
  }
}