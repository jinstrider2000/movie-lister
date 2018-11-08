export default (state={currentSearchPaginator: undefined, currentSearchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""}, action) => {
  switch (action.type) {
    case "LOAD_SEARCH_RESULTS":
      if (!state.currentSearchPaginator || action.searchTerm !== state.currentSearchTerm) {
        return {...state, currentSearchPaginator: action.currentSearchPaginator, searchTerm: action.searchTerm, results: action.results, totalResults: action.currentSearchPaginator.totalresults, totalLoaded: action.results.length};
      } else {
        return {...state, currentSearchPaginator: action.currentSearchPaginator, results: [...state.results, ...action.results], totalLoaded: state.totalLoaded + action.results.length};
      }
    case "DISPLAY_SEARCH_ERROR":
      return {currentSearchPaginator: undefined, searchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: true, errorMessage: action.message};
    case "CLEAR_SEARCH":
    case "LOAD_MOVIE":
    case "SIGN_OUT":
      return {currentSearchPaginator: undefined, searchTerm: "", results: [], totalResults: 0, totalLoaded: 0, error: false, errorMessage: ""};
    default:
      return state;
  }
}