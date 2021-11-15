import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { listUsers, getAvgAge } from "../utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [avgAge, setAvgAge] = useState({});

  const { url } = useRouteMatch();

  console.log(users)

  useEffect(() => {
    let isMounted = true;
    listUsers().then((res) => {
      if (isMounted) setUsers(res);
    });
    return () => (isMounted = false);
    // watches the length of users before re rendering
  }, [users.length]);

  useEffect(() => {
    let isMounted = true;
    getAvgAge().then((res) => {
      if (isMounted) setAvgAge(res);
    });
    return () => (isMounted = false);
  }, []);

  const sortUsers = () => {
    const sortedUsersList = [...users].sort((a, b) => a.name > b.name ? 1 : -1);
    setUsers(sortedUsersList);
  };

  return (
    <div>
      <div className="users-links">
        <Link to="/">Home</Link>
        <Link to="/users/new">Add User</Link>
      </div>
      <h3>The average age of our users is {avgAge.average_age} years old</h3>

      <button className="btn btn-primary" onClick={sortUsers}>
        Sort Alphabetically
      </button>

      {users.map((user) => (
        <div className="user-links" key={user.user_id}>
          <Link to={`${url}/${user.user_id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
