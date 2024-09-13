import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>
        <Link to="/">Shopping App</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
