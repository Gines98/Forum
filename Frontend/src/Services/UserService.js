export async function getAllUsers() {
  try {
    const response = await fetch("/API/3sumAPI/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  const response = await fetch(
    `/API/3sumAPI/user?userId=${data.userId}&name=${data.name}&lastName=${data.lastName}&email=${data.email}&password=${data.password}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: data }),
    }
  );
  return await response.json();
}

export async function updateUser(data) {
  const response = await fetch(
    `/API/3sumAPI/user?newUserId=${data.userId}&userId=${userId}&name=${data.name}&lastName=${data.lastName}&email=${data.email}&password=${data.password}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: data }),
    }
  );
  return await response.json();
}

export async function deleteUser(data) {
  const response = await fetch(`/API/3sumAPI/user/${data}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
