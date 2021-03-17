import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "./components/configs/routes";

import { fetchUsers } from "./redux/usersOperations";

import AppHeader from "./components/AppHeader/AppHeader";
import Loader from "./components/Loader/Loader";

import "./App.css";

const AsyncUsersPage = lazy(() => import("./components/Users/UsersContainer"));
const AsyncUserPage = lazy(() => import("./components/User/User"));
const AsyncFormPage = lazy(() => import("./components/Form/FormContainer"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  });

  return (
    <div className="App">
      <h2>Список пользователей</h2>

      <AppHeader />

      <Suspense fallback={Loader}>
        <Switch>
          <Route path={routes.FORM}>
            <AsyncFormPage />
          </Route>
          <Route path={routes.USER}>
            <AsyncUserPage />
          </Route>
          <Route exact path={routes.USERS}>
            <AsyncUsersPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
