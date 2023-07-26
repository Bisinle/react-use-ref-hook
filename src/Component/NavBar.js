import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  const LinkStyles = {
    textDecoration: "none",
    margin: "10px",
    color: "white",
    background: " #da461c",
    padding: "5px 10px",
    borderRadius: "4px",
  };
  return (
    <div className="navbar">
      <header>
        <NavLink to="/" style={LinkStyles}>
          Home
        </NavLink>
        <NavLink to="focusInput" style={LinkStyles}>
          FocusInput
        </NavLink>
        <NavLink to="inputChange" style={LinkStyles}>
          InputChange
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
