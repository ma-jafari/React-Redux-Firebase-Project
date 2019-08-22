import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">New Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignedInLinks;
