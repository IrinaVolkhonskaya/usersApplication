import shortid from "shortid";
import types from "./usersActionTypes";

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = (users) => ({
  type: types.FETCH_SUCCESS,
  payload: users,
});

const fetchError = (error) => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const getUserById = (userId) => ({
  type: types.GET_USER_BY_ID,
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
}) => ({
  type: types.ADD_USER,
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

const deleteUser = (id) => ({
  type: types.DELETE_USER,
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
}) => ({
  type: types.UPDATE_USER,
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
