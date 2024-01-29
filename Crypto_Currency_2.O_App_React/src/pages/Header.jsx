import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row p-2 md:p-4 shadow-md bg-orange-400 text-white fixed top-0 w-full z-10">
        <div className="mx-2 md:mx-12 mb-2 md:mb-0">
          <Link to="/">
            <h1 className="text-lg md:text-4xl font-serif text-lime-800 font-extrabold">
              Crypto Currency
            </h1>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 md:text-lg ">
          <button className="font-bold bg-yellow-300 text-black w-full md:w-24 mb-2 md:mb-0">
            <Link to="/">Home</Link>
          </button>
          <button className="font-bold bg-yellow-300 text-black w-full md:w-24 mb-2 md:mb-0">
            <Link to="/exchanges">Exchanges</Link>
          </button>
          <button className="font-bold bg-yellow-300 text-black w-full md:w-24 mb-2 md:mb-0">
            <Link to="/coins">Coins</Link>
          </button>
        </div>
        <div className="ml-auto mr-2 md:mr-10 mt-2 md:mt-0">
          <img
            src={logo}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
            alt="logo"
          />
        </div>
      </nav>
      <div className="pt-20 mt-16 bg-yellow-100">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Header;
