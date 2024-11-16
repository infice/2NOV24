import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./UserCard";
import { UserList } from "./UserList";
import { FlipCard } from "./FlipCard";

const users = [
  { id: 1, username: "Alice", email: "alice@example.com", bio: "😵" },
  { id: 2, username: "Bob", email: "bob@example.com", bio: "🥲" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FlipCard />);
