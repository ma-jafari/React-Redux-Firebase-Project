import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            JcS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignedInLinks;
