import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styling/User.css";
import { Avatar } from "antd";
import "antd/dist/antd.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }
  return (
    <div className="main_contents">
      <div className="profile_header">
        <Avatar size={150} src={user.photoUrl}></Avatar>
        <div className="name_header">
          <strong className="first_name">{user.firstName}</strong>
          <p className="last_name">{user.lastName}</p>
        </div>
      </div>
      <strong>Email</strong> {user.email}
      <strong>About</strong> {user.about}
    </div>
  );
}
export default User;
