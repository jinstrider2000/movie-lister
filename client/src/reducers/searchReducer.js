export default (state={currentSearchObj: undefined, results: [], totalResults: undefined, totalLoaded: undefined}, action) => {
  switch (action.type) {
    case "LOAD_RESULTS":
      return {...state};
    case "LOAD_MOVIE":
      return 
    case "SIGN_OUT":
      return {currentSearchObj: undefined, results: [], totalResults: undefined, totalLoaded: undefined};
    default:
      return state;
  }
}