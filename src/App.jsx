import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";
import Tabs from "./components/TabComponents/Tabs";
import Marquee from "react-fast-marquee";
import Text from "./components/Marquee/Text";

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
    <>
      <div className="h-screen grid place-items-center">
        <div className="text-center">
          {users.map((user) => (
            <p key={user.id} className="text-4xl">
              {user.name}
            </p>
          ))}
          <Marquee className="my-8">
            <p className="text-6xl font-bold xl text-gray-200">
              I can be a React component, multiple React components, or just
              some text.
            </p>
          </Marquee>
          <Tabs />
        </div>
      </div>
    </>
  );
}
