import { combineReducers } from "redux";
import historyReducer from './historyReducer';
import searchReducer from './searchReducer';
import authenticationReducer from './authenticationReducer';

export default combineReducers({
  user: authenticationReducer,
  historyInfo: historyReducer,
  searchResults: searchReducer
})