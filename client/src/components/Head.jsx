import React from "react";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <header className="shadow-md">
      <div className="flex flex-wrap justify-between p-5 items-center mx-auto max-w-6xl">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-3xl flex flex-col hover:scale-105 transition-all duration-500 ease-out">
            <span>Nathan's</span>
            <span className="text-slate-500">Website</span>
          </h1>
        </Link>
        <ul className="flex flex-wrap gap-4">
          <Link to="/">
            <li className="text-blue-400 text-sm sm:text-xl group">
              <span className="relative inline-block">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500 ease-out"></span>
              </span>
            </li>
          </Link>
          <Link to="/listing">
            <li className="text-blue-400 text-sm sm:text-xl group">
              <span className="relative inline-block">
                Playground
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500 ease-out"></span>
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="text-blue-400 text-sm sm:text-xl group">
              <span className="relative inline-block">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500 ease-out"></span>
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
