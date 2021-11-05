import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { listUsers, getAvgAge } from "./utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [avgAge, setAvgAge] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    listUsers().then(setUsers);
  }, []);

  useEffect(() => {
    getAvgAge().then(setAvgAge);
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <h3>The average age of our users is {avgAge.average_age} years old</h3>

      {users.map((user) => (
        <div className="user-links" key={user.user_id}>
          <Link to={`${url}/${user.user_id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
