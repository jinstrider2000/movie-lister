export default (state={loading: false, pictures: []}, action) => {
  switch (action.type) {
    case "LOADING_CATS":
      return {...state, loading: true, pictures: []};
    case "FETCH_CATS":
      return {...state, loading: false, pictures: action.payload};
    default:
      return state;
  }
}