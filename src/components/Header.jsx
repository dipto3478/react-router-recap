import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto p-5">
      <div>
        <Link to="/">
          <h3 className="text-xl text-white font-bold">🛒 Hello Shop</h3>
        </Link>
      </div>
      <nav className="flex items-center gap-5 font-bold text-white text-sm">
        <Link to="/">Home</Link>
        <Link to="/shops">Shops</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
