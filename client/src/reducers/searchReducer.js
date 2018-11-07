export default (state={currentSearchObj: undefined, results: [], totalResults: undefined, totalLoaded: undefined, errorMessage: undefined}, action) => {
  switch (action.type) {
    case "LOAD_RESULTS":
      if (!state.currentSearchObj) {
        return {...state, currentSearchObj: action.currentSearchObj, results: action.results, totalResults: action.totalResults, totalLoaded: action.results.length}
      } else {
        return {...state, }
      }
    case "LOAD_MOVIE":
      return 
    case "SIGN_OUT":
      return {currentSearchObj: undefined, results: [], totalResults: undefined, totalLoaded: undefined, errorMessage: undefined};
    default:
      return state;
  }
}