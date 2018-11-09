export default (state = {id: null, signedIn: false}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {id: action.user_id, signedIn: true};
    case "SIGN_OUT":
      return {id: null, signedIn: false};
    default:
     return state;
  }
}