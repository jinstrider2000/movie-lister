export default (state={currentSearchObj: undefined, searchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""}, action) => {
  switch (action.type) {
    case "LOAD_SEARCH_RESULTS":
      if (!state.currentSearchObj || action.searchTerm !== state.searchTerm) {
        return {...state, currentSearchObj: action.currentSearchObj, searchTerm: action.searchTerm, results: action.results, totalResults: action.totalResults, totalLoaded: action.results.length}
      } else {
        return {...state, currentSearchObj: action.currentSearchObj, results: [...state.results, ...action.results], totalLoaded: state.totalLoaded + action.results.length}
      }
    case "DISPLAY_SEARCH_ERROR":
      return {currentSearchObj: undefined, searchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: true, errorMessage: action.message}
    case "LOAD_MOVIE":
    case "SIGN_OUT":
      return {currentSearchObj: undefined, searchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""};
    default:
      return state;
  }
}