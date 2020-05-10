import { CREATE_POST, DELETE_POST, GET_POSTS } from '../actions/types'; //Types of actions

const initalState = {
  posts: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
