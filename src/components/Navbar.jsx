import { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-4 bg-blue-400 z-20">
      <div className="w-full flex items-center justify-between">
        <ul className="list-none sm:flex gap-10 hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white text-18px font-medium cursor-pointer ${
                active === link.title
                  ? "border-b-2 border-white rounded-full"
                  : ""
              } hover:border-b-2 hover:border-white hover:rounded-full transition-all duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center">
          <input
            className="rounded-xl p-1 pl-4"
            type="text"
            placeholder="Type to search"
          />
          <AiOutlineSearch className="m-2 text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
