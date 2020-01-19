import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types'; //Types of actions

const initalState = {
  items: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        setLoading: false
      };
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    }
    case ITEMS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
}
