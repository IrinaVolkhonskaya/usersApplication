import axios from "axios";
import { Dispatch } from 'redux';
import actions from "./usersActions";
import { IUser } from '../components/models';

const BASE_URL = "http://localhost:4040/users";

const fetchUsers = () => async (dispatch: Dispatch) => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(BASE_URL);
    // console.log(`response.data`, response.data);
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addUser = ({
  first_name,
  last_name,
  birth_date,
  gender,
  job,
  biography,
  is_active,
}: IUser) => (dispatch: Dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .post(BASE_URL, {
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
    })
    .then(({ data }) => dispatch(actions.addUser(data)))
    .catch((error) => dispatch(actions.fetchError(error)));
};

const deleteUser = (id: number) => (dispatch: Dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`${BASE_URL}/${id}`)
    .then(() => {
      dispatch(actions.deleteUser(id));
    })
    .catch((error) => {
      dispatch(actions.fetchError(error));
    });
};

const getUserById = (id: number) => (dispatch: Dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .get(`${BASE_URL}/${id}`)
    .then(() => {
      dispatch(actions.getUserById(id));
    })
    .catch((error) => {
      dispatch(actions.fetchError(error));
    });
};

const updateUser = ({
  id,
  first_name,
  last_name,
  birth_date,
  gender,
  job,
  biography,
  is_active,
}: IUser) => (dispatch: Dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .patch(`${BASE_URL}/${id}`, {
      id,
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
    })
    .then(({ data }) => dispatch(actions.updateUser(data)))
    .catch((error) => dispatch(actions.fetchError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export { fetchUsers, addUser, deleteUser, getUserById, updateUser };
