import React from "react";
import { UserCard } from "./UserCard";

const users = [
  { id: 1, username: "Alice", email: "alice@example.com", bio: "😵" },
  { id: 2, username: "Bob", email: "bob@example.com", bio: "🥲" },
];

export function UserList() {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} username={user.username} email={user.email} />
      ))}
    </div>
  );
}
