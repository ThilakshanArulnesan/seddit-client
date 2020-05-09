// This file brings together all other reducers

import { combineReducers } from "redux"; //combines reducers together
import postReducer from "./postReducer.js"; //personal reducer
import errorReducer from "./errorReducer.js"; //personal reducer
import authReducer from "./authReducer.js"; //personal reducer

//Combines reducers:
export default combineReducers({
  post: postReducer,
  error: errorReducer,
  auth: authReducer,
});
