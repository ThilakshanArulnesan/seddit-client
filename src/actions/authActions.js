import { returnErrors } from './errorActions';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS
} from './types';

import axios from 'axios';

//Check token & load user

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const config = tokenConfig(getState);
  axios
    .get('/auth/user', config)
    .then(res => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};
//Logout
export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};

//Login user
export const login = ({ email, password }) => dispatch => {
  //headers
  const config = { headers: { 'Content-type': 'application/json' } };

  //Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/auth', body, config)
    .then(res => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
    });
};

//Register user
export const register = ({ name, email, password }) => dispatch => {
  //headers
  const config = { headers: { 'Content-type': 'application/json' } };

  //Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('/users', body, config)
    .then(res => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAIL });
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
    });
};

//setup config/headers and token
export const tokenConfig = getState => {
  // Get token from local storage:
  const token = getState().auth.token;

  //Headers:
  const config = {
    headers: {
      headers: {
        'Content-type': 'application/json'
      }
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};
