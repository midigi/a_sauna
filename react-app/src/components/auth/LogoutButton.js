import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import { Button } from "antd";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    return dispatch(logout());
  };

  return (
    <Button type="link" danger="true" ghost="true" onClick={onLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
