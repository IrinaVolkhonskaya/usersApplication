import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorBoundary from "react-error-boundaries";
import routes from "./components/configs/routes";
import { fetchUsers } from "./redux/usersOperations";

import AppHeader from "./components/AppHeader/AppHeader";
import Loader from "./components/Loader/Loader";

import "./App.css";

const AsyncUsersPage = lazy(() => import("./components/Users/UsersContainer"));
const AsyncUserPage = lazy(() => import("./components/User/User"));
const AsyncFormPage = lazy(() => import("./components/Form/FormContainer"));


// interface ErrorBoundaryProps {
//  error: string,
//  resetErrorBoundary: undefined,
// }

function ErrorFallback({error, resetErrorBoundary}: ErrorBoundaryProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  });

  return (
    <div className="App">
      <h2>Список пользователей</h2>
      <ErrorBoundary FAllbackComponent={ErrorFallback}>
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
      </ErrorBoundary>
    </div>
  );
}
