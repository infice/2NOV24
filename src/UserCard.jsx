import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function UserCard(props) {
  /* export แบบธรรมดา */
  return (
    <div className="card m-3" style={{ width: "18rem" /* ,height:"20px" */ }}>
      <div className="card-body">
        <h5 className="card-title">{props.username}</h5>
        <p className="card-text">Email: {props.email}</p>
      </div>
    </div>
  );
}

/* or export {UserCard}; */
