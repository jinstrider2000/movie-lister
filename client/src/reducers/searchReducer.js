export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_RESULTS":
      return [...state, ...action.payload];
    case "SIGN_OUT":
      return [];
    default:
      return state;
  }
}