const URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export async function listUsers() {
  try {
    const usersRes = await fetch(`${URL}/users`);
    return await usersRes.json();
  } catch (err) {
    console.error(err);
  }
}

export async function readUser(userId) {
  try {
    const usersRes = await fetch(`${URL}/users/${userId}`);
    return await usersRes.json();
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(user) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const newUser = await fetch(`${URL}/users`, options);
    return await newUser.json();
  } catch (err) {
    console.error(err);
  }
}

export async function updateUser(user) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const updatedUser = await fetch(`${URL}/users/${user.user_id}`, options);
    return await updatedUser.json();
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUser(userId) {
  try {
    await fetch(`${URL}/users/${userId}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error(err);
  }
}
