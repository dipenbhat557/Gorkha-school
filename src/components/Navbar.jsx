import { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-4 bg-blue-400 z-20 relative">
      <div className="w-full flex items-center justify-between">
        <ul className="list-none sm:flex gap-6 md:gap-10 hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white text-18px font-medium cursor-pointer ${
                active === link.title ? "border-b-2 border-white " : ""
              } hover:border-b-2 hover:border-white  transition-all duration-300 `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center">
          <input
            className="rounded-xl p-1 pl-4 ml-6 md:ml-0"
            type="text"
            placeholder="Type to search"
          />
          <AiOutlineSearch className="m-2 text-2xl text-white hover:bg-blue-500 hover:text-4xl hover:rounded-xl hover:text-white hover:p-2" />
        </div>
        {/* Mobile menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? "src/assets/close.png" : "src/assets/menu.png"}
            alt="menu"
            className="w-[30px] h-[30px] object-contain cursor-pointer rounded-3xl text-2xl "
            onClick={() => setToggle(!toggle)}
          />
          <ul
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-blue-400 absolute top-12 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl flex flex-col items-end gap-4`}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
