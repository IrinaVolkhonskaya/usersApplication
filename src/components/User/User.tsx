import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as usersSelectors from "../../redux/usersSelectors";
import * as usersOperations from "../../redux/usersOperations";
import routes from "../configs/routes";
import style from "./User.module.css";
import {IUser} from '../models';


const User = (): JSX.Element => {
  const user: IUser = useSelector(usersSelectors.getUserById);
  console.log(`user in User`, user);
  const dispatch = useDispatch();

  const onDeleteUser = useCallback(() => {
    dispatch(usersOperations.deleteUser(user.id));
    alert(`User ${user.first_name} ${user.last_name} deleted`);
  }, [dispatch, user.id, user.first_name, user.last_name]);

  const onUpdateUser = useCallback(() => {
    dispatch(usersOperations.updateUser(user));
  }, [dispatch, user]);

  return (
    <div>
      <div className={style.userData} key={user.id}>
        <NavLink to="/users">Back to users</NavLink>
        <div>
          <b>First Name: </b>
          {user.first_name}
        </div>
        <div>
          <b>Last Name: </b>
          {user.last_name}
        </div>
        <div>
          <b>Birth Date: </b>
          {user.birth_date}
        </div>
        <div>
          <b>Gender: </b>
          {user.gender}
        </div>
        <div>
          <b>Job: </b>
          {user.job}
        </div>
        <div>
          <b>Biography: </b>
          {user.biography}
        </div>
        <div>
          Is Active
          <input type="checkbox" checked={user.is_active} />
        </div>
        {/* <NavLink to={routes.FORM} user={user}> */}
        <NavLink to={routes.FORM}>
          Update
          <button type="button" onClick={onUpdateUser}></button>
        </NavLink>
        <NavLink to={routes.USERS}>
          Delete
          <button type="button" onClick={onDeleteUser}></button>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
