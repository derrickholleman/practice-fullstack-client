import React, { useState, useEffect } from "react";
import { readUser } from "./utils/api";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { deleteUser } from "./utils/api";
import EditUser from "./EditUser";
const dayjs = require("dayjs");

const User = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const history = useHistory();

  const handleDeleteUser = () => {
    if (window.confirm("Do you really want to delete this user?")) {
      deleteUser(userId);
      history.push("/users");
    }
  };

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

      <div className="user-profile-btns">
        <EditUser />
        <Button variant="danger" onClick={handleDeleteUser}>
          Delete User
        </Button>
      </div>
    </div>
  );
};

export default User;
