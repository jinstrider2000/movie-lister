import { combineReducers } from "redux";
import historyReducer from './historyReducer';
import searchReducer from './searchReducer';
import authenticationReducer from './authenticationReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  historyInfo: historyReducer,
  user: authenticationReducer,
  movie: movieReducer,
  searchResults: searchReducer
})