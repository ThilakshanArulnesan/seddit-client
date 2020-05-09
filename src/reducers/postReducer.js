import { CREATE_POST, DELETE_POST } from '../actions/types'; //Types of actions

const initalState = {
  items: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_POST: {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
