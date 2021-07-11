import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="header-text">
        <Link  to="/">
          Pizza Store
        </Link>
      </h1>
      <h1 className="header-text">
        <Link to="/Cart">Cart</Link>
      </h1>
    </div>
  );
}

export default Header;
