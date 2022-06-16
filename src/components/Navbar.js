import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/article/list">Article</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
