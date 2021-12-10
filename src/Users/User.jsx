import React, { useState, useEffect } from "react";
import { readUser, deleteUser } from "../utils/api";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import EditUser from "./EditUser";
// correct date format (otherwise it's off by one day)
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const User = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const history = useHistory();

  const handleDeleteUser = () => {
    if (window.confirm("Do you really want to delete this user?")) {
      deleteUser(userId);
      // refreshes users page to reflect delete
      history.goBack();
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
      <p>Birthday: {dayjs.utc(user.birthday).format("MMMM DD")}</p>
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
