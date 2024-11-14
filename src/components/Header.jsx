import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 flex justify-between items-center bg-slate-500 text-white">
      <h2 className="text-2xl font-bold">Logo</h2>
      <input type="text" className="p-2 rounded-md text-black" />
      {/* Text in this input wont change on Link routing */}
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
