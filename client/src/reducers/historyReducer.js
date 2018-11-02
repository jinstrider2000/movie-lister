// LOAD_HISTORY, ADD_HISTORY, REMOVE_HISTORY

export default (state = {history: [], retrieved: false}, action) => {
  switch (action.type) {
    case "LOAD_HISTORY":
      return {...state, history: action.payload, retrieved: true};
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