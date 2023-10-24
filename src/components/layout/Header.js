import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#f2f2f2", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ width: "100px", height: "50px" }}
            />
          </Link>
        </div>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ marginRight: "20px" }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: "20px" }}>
              <Link to="/products">Products</Link>
            </li>
            <li style={{ marginRight: "20px" }}>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;