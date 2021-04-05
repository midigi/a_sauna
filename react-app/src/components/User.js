import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
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

  console.log(user);

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>First Name</strong> {user.firstName}
      </li>
      <li>
        <strong>Last Name</strong> {user.lastName}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>About</strong> {user.about}
      </li>
      <li>
        <img src={user.photoUrl} style={{ width: "200px" }}></img>
      </li>
    </ul>
  );
}
export default User;
