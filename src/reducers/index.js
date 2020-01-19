// This file brings together all other reducers

import { combineReducers } from 'redux'; //combines reducers together
import postReducer from './postReducer.js'; //personal reducer

//Combines reducers:
export default combineReducers({
  post: postReducer
});
