export default (state = {id: undefined}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {id: action.user_id};
    case "SIGN_OUT":
      return {id: null};
    default:
     return state;
  }
}