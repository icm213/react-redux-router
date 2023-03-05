import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/users">Users</Link>
      <Outlet />
    </nav>
  );
}
