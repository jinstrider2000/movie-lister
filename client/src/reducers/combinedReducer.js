import { combineReducers } from "redux";
import historyReducer from './historyReducer';
import searchReducer from './searchReducer';
import authenticationReducer from './authenticationReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  user: authenticationReducer,
  historyInfo: historyReducer,
  searchResults: searchReducer,
  alert: alertReducer
})