import { combineReducers } from "redux";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR, GET_USER_BY_ID, ADD_USER, DELETE_USER, UPDATE_USER,UserActionTypes, FetchActionTypes } from "./usersActionTypes";


function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_SUCCESS:
      return payload;

    case ADD_USER:
      return [...state, payload];

    case DELETE_USER:
      return state.filter((item) => item.id !== payload);

    case UPDATE_USER:
      return [...state, payload];

    default:
      return state;
  }
}

function userItemIdReducer(state = null, { type, payload }) {
  switch (type) {
    case GET_USER_BY_ID:
      return payload;
    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case FETCH_REQUEST:
      return true;

    case FETCH_SUCCESS:
    case FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case FETCH_REQUEST:
      return null;

    case FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: usersReducer,
  userId: userItemIdReducer,
  loading: loadingReducer,
  error: errorReducer,
});
