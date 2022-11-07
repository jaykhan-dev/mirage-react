import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";

let server = createServer();
server.get("/api/users", { users: [{ id: 1, name: "Jay" }] });

export default function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id} className="text-4xl">
          {user.name}
        </p>
      ))}
    </div>
  );
}
