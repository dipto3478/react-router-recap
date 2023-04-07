import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-container p-5">
      <div>
        <Link to="/">
          <h3 className="text-xl text-white font-bold">🛒 Hello Shop</h3>
        </Link>
      </div>
      <nav className="flex items-center gap-5 font-bold text-white text-sm">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FFC200] underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FFC200] underline" : ""
          }
          to="/shops"
        >
          Shops
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#FFC200] underline" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
