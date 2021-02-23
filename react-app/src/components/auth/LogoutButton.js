import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    console.log("hello");
    return dispatch(logout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
