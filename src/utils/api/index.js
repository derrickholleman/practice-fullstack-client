const USERS_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/users";

export async function listUsers() {
  try {
    const usersRes = await fetch(`${USERS_URL}`);
    return await usersRes.json();
  } catch (err) {
    console.error(err);
  }
}

export async function readUser(userId) {
  try {
    const usersRes = await fetch(`${USERS_URL}/${userId}`);
    return await usersRes.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getAvgAge() {
  try {
    const ageRes = await fetch(`${USERS_URL}/average-age`);
    return await ageRes.json();
  } catch (err) {
    console.error(err);
  }
}
