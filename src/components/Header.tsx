import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          Hotowork.com
        </Link>
        <nav className="nav">
          <Link to="/about">About</Link>
          <Link to="/join" className="join-link">
            Join Us 🚀
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
