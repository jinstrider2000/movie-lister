export default (state={currentSearchPaginator: null, currentSearchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""}, action) => {
  switch (action.type) {
    case "GET_SEARCH_RESULTS":
      if (!state.currentSearchPaginator || action.newSearchTerm !== state.currentSearchTerm) {
        return {currentSearchPaginator: action.newSearchPaginator, currentSearchTerm: action.newSearchTerm, results: action.results, totalResults: action.newSearchPaginator.totalresults, totalLoaded: action.results.length, error: false, errorMessage: ""};
      } else {
        return {...state, currentSearchPaginator: action.newSearchPaginator, results: [...state.results, ...action.results], totalLoaded: state.totalLoaded + action.results.length, error: false, errorMessage: ""};
      }
    case "DISPLAY_SEARCH_ERROR":
      return {currentSearchPaginator: null, currentSearchTerm: action.newSearchTerm, results: [], totalResults: 0, totalLoaded: 0, error: true, errorMessage: action.message};
    case "CLEAR_SEARCH":
    case "GET_MOVIE":
    case "SIGN_OUT":
      return {currentSearchPaginator: null, currentSearchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""};
    default:
      return state;
  }
}