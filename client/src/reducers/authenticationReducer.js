export default (state = {id: null, username: null ,signedIn: false}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {id: action.payload.id, username: action.payload.username, signedIn: true};
    case "SIGN_OUT":
      return {id: null, username: null, signedIn: false};
    default:
     return state;
  }
}