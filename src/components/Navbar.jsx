import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id, title) => {
    setActive(title);
    setToggle(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.paddingX} w-full fixed top-0 left-0 z-50`}>
      <nav className={`container mx-auto flex justify-between py-5 items-center ${scrolled ? "backdrop-blur-md bg-primary/40" : ""} rounded-[3rem]`}>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((nav) => (
            <li
              key={nav.id}
              className={`font-thickPoppins text-2xl hover:text-3xl transition-all ease-in-out duration-200 cursor-pointer ${
                active === nav.title
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-[#FA8578] to-[#DB5366]"
                  : "text-white/80"
              }`}
              onClick={() => handleLinkClick(nav.id, nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="flex items-center justify-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <FaCat className="text-5xl text-white hover:scale-125 transition-all ease-in-out duration-200" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.slice(Math.ceil(navLinks.length / 2)).map((nav) => (
            <li
              key={nav.id}
              className={`font-thickPoppins text-2xl hover:text-3xl transition-all ease-in-out duration-200 cursor-pointer ${
                active === nav.title
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-[#FA8578] to-[#DB5366]"
                  : "text-white/80"
              }`}
              onClick={() => handleLinkClick(nav.id, nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </nav>

      {toggle && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-primary/80 backdrop-blur-md z-50">
          <div className="absolute top-0 right-0 p-8">
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>

          <ul className="list-none flex flex-col items-center gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-4xl font-thickPoppins cursor-pointer ${
                  active === nav.title ? "text-white" : "text-white/80"
                } hover:text-white transition-all duration-200`}
                onClick={() => handleLinkClick(nav.id, nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;