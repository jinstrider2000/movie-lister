// LOAD_HISTORY, ADD_HISTORY, REMOVE_HISTORY

export default (state = {history: [], retrieved: false, loading: false}, action) => {
  switch (action.type) {
    case "START_LOAD":
      return {...state, loading: true};
    case "LOAD_HISTORY":
      return {history: action.payload, retrieved: true, loading: false};
    case "ADD_HISTORY":
      return {...state, history: [...state.history, action.payload]};
    case "REMOVE_HISTORY":
      return {...state, history: state.history.filter(historyItem => historyItem.id !== action.id)};
    case "SIGN_OUT":
      return {history: [], retrieved: false}
    default:
      return state;
  }
}