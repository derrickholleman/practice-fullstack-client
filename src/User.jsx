import React, { useState, useEffect } from "react";
import { readUser } from "./utils/api";
import { useParams, Link } from "react-router-dom";
const dayjs = require("dayjs");

const User = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    readUser(userId).then(setUser);
  }, [userId]);

  return (
    <div>
      <Link to="/users">Back to Users</Link>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <p>Birthday: {dayjs(user.birthday).format("MMMM DD")}</p>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
