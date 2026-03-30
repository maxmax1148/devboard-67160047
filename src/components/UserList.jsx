import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default UserList;