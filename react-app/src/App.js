import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { restoreUser } from "./store/session";
import TaskForm from "./components/auth/TaskForm";
import Home from "./components/Home";
import Task from "./components/Task";
import Project from "./components/Project";
import ProjectForm from "./components/auth/ProjectForm";
import SplashPage from "./components/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" exact={true}>
          <SplashPage></SplashPage>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path="/tasks" exact={true}>
          <NavBar />
          <TaskForm />
          <Task></Task>
        </ProtectedRoute>
        <ProtectedRoute path="/project" exact={true}>
          <NavBar />
          <ProjectForm />
        </ProtectedRoute>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <NavBar />
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <NavBar />
          <Home></Home>
        </ProtectedRoute>
        <ProtectedRoute path="/project/:id" exact={true}>
          <NavBar />
          <Project></Project>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
