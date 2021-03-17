import FETCH_REQUEST from './usersActionTypes';
import FETCH_SUCCESS from './usersActionTypes';
import FETCH_ERROR from './usersActionTypes';
import ADD_USER from './usersActionTypes';
import DELETE_USER from './usersActionTypes';
import UPDATE_USER from './usersActionTypes';
import GET_USER_BY_ID from './usersActionTypes';

import {IUsers, IUser} from '../components/models';

//Actions
export interface IFetchRequest {
    type: typeof FETCH_REQUEST,
}

export interface IFetchSuccess {
    type: typeof FETCH_SUCCESS,
    payload: IUsers,
}

export interface IFetchError {
    type: typeof FETCH_ERROR,
    payload: string,
}

export interface IAddUser {
    type: typeof ADD_USER,
    payload: IUser,
}

export interface IDeleteUser {
    type: typeof DELETE_USER,
    payload: number,
}

export interface IUpdateUser {
    type: typeof UPDATE_USER,
    payload: IUser,
}

export interface IGetUserById {
    type: typeof GET_USER_BY_ID,
    payload: number,
}