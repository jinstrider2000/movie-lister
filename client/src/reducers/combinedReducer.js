import { combineReducers } from "redux";
import historyReducer from './historyReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  history: historyReducer
})