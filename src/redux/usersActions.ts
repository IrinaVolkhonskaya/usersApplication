import shortid from "shortid";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR, GET_USER_BY_ID, ADD_USER, DELETE_USER, UPDATE_USER, UserActionTypes, FetchActionTypes } from "./usersActionTypes";

import { IUser, IUsers } from '../components/models';


const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (users: IUsers): FetchActionTypes => ({
  type: FETCH_SUCCESS,
  payload: users,
});

const fetchError = (error: string): FetchActionTypes => ({
  type: FETCH_ERROR,
  payload: error,
});

const getUserById = (userId: number): UserActionTypes => ({
  type: GET_USER_BY_ID,
  payload: userId,
});

const addUser = ({
  first_name,
  last_name,
  birth_date,
  gender,
  job,
  biography,
  is_active,
}: IUser): UserActionTypes => ({
  type: ADD_USER,
  payload: {
    id: shortid.generate(),
    first_name,
    last_name,
    birth_date,
    gender,
    job,
    biography,
    is_active,
  },
});

const deleteUser = (id: number): UserActionTypes => ({
  type: DELETE_USER,
  payload: id,
});

// const updateUser = (id) => ({
//   type: types.UPDATE_USER,
//   payload: id,
// });

// const updateUser = (user) => ({
//   type: types.UPDATE_USER,
//   payload: {
//      id: user.id,
//      first_name: user.first_name,
//     last_name: user.last_name },
// });

const updateUser = ({
  id,
  first_name,
  last_name,
  birth_date,
  gender,
  job,
  biography,
  is_active,
}: IUser): UserActionTypes => ({
  type: UPDATE_USER,
  payload: {
    id,
    first_name,
    last_name,
    birth_date,
    gender,
    job,
    biography,
    is_active,
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};
