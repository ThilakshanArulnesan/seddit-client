import { tokenConfig } from "../actions/authActions";
import { returnErrors } from "../actions/errorActions";

/*
Add .catch to all axios requests:
.catch(err=>{
  dispatch(returnErrors(err.response.data, err.response.status))
});

When making a request that needs authentication:
export const addItem = item => (dispatch, getState) =>{
  axios.post('/items', item, tokenConfig(getState))
  .then(res=>{
    ...
  })
}

*/
