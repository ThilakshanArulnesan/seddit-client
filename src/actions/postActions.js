import axios from "axios";
import { CREATE_POST, DELETE_POST } from "./types"; //Types of actions
import { tokenConfig } from "../actions/authActions";
//Dispatches actions with proper payloads
export const createPost = body => (dispatch, getState) => {
  axios.post("/posts", body, tokenConfig(getState)).then(res =>
    dispatch({
      type: CREATE_POST,
      payload: res.data
    })
  );
};

export const deletePost = id => dispatch => {
  axios.delete(`/items/${id}`).then(res =>
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  );
};

// export const setItemsLoading = item => {
//   return {
//     type: ITEMS_LOADING
//   };
// };
