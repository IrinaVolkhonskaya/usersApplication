import { IUsers, IUser } from '../components/models';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER_BY_ID = 'GET_USER_BY_ID';

//Actions
interface IFetchRequest {
  type: typeof FETCH_REQUEST,
}

interface IFetchSuccess {
  type: typeof FETCH_SUCCESS,
  payload: IUsers,
}

interface IFetchError {
  type: typeof FETCH_ERROR,
  payload: string,
}

interface IAddUser {
  type: typeof ADD_USER,
  payload: IUser,
}

interface IDeleteUser {
  type: typeof DELETE_USER,
  payload: number,
}

interface IUpdateUser {
  type: typeof UPDATE_USER,
  payload: IUser,
}

interface IGetUserById {
  type: typeof GET_USER_BY_ID,
  payload: number,
}

export type UserActionTypes = IAddUser | IDeleteUser | IUpdateUser | IGetUserById;
export type FetchActionTypes = IFetchRequest | IFetchSuccess | IFetchError


// eslint-disable-next-line import/no-anonymous-default-export
export {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_USER_BY_ID,
};


