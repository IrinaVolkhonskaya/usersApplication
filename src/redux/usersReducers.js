import { combineReducers } from "redux";
import types from "./usersActionTypes";

function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_USER:
      return [...state, payload];

    case types.DELETE_USER:
      return state.filter((item) => item.id !== payload);

    case types.UPDATE_USER:
      return [...state, payload];

    default:
      return state;
  }
}

function userItemIdReducer(state = null, { type, payload }) {
  switch (type) {
    case types.GET_USER_BY_ID:
      return payload;
    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
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
