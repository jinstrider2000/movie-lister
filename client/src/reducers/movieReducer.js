export default (state={}, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
}
