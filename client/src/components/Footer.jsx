import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  return (
    <footer className="text-center mt-auto footer">
      <div className="flex flex-col gap-3">
        <ul className="flex gap-3 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/mingyang-li-6107352a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-3xl hover:text-blue-300 transition-all duration-300 ease-out">
              <FaLinkedin />
            </li>
          </a>
          <a
            href="https://github.com/MeeskaM00ska"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-3xl hover:text-blue-300 transition-all duration-300 ease-out">
              <FaGithub />
            </li>
          </a>
        </ul>
        <p>
          Last updated on &copy; {currentDate} / {currentMonth} / {currentYear}
        </p>
      </div>
    </footer>
  );
}
