export default (state={}, action) => {
  switch (action.type) {
    case "LOAD_MOVIE":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
}
