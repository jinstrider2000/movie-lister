// AUTHENTICATE_USER
export default (state = {userId: null}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {...state, userId: action.user_id};
    case "SIGN_OUT":
      return {...state, userId: null};
    default:
     return state;
  }
}