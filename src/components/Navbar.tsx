import { useState } from "react";
import Logo from "../assets/logo-text.png";

import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#F1F5F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-pera text-xl p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className="
              logo
              lg:static
              absolute
              left-1/2
              -translate-x-1/2
              lg:translate-x-0
            "
          >
            <img src={Logo} alt="DevStack" className="w-20 sm:w-24 lg:w-auto" />
          </div>
          <div className="items hidden lg:block">
            <ul className="flex gap-7 text-sm text-text font-jakarta">
              <li>
                <a className="text-secondary" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition" href="#">
                  Technologies
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition" href="#">
                  Projects
                </a>
              </li>

              <li>
                <a className="hover:text-secondary transition" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="button flex items-center gap-1 sm:gap-2">
            <button
              className="
                text-text
                font-jakarta
                text-[10px]
                sm:text-sm
                px-2
                sm:px-4
                lg:px-5
                py-1.5
                sm:py-2
                lg:py-2.5
                rounded-3xl
                hover:bg-primary
                hover:text-white
                transition
              "
            >
              Sign In
            </button>
            <button
              className="
                bg-primary
                font-jakarta
                text-[10px]
                sm:text-sm
                py-1.5
                sm:py-2
                lg:py-2.5
                px-3
                sm:px-4
                lg:px-5
                rounded-3xl
                text-white
                hover:bg-secondary
                transition
              "
            >
              Sign Up
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#F1F5F9] py-3">
            <ul className="flex flex-col gap-1 font-jakarta">
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-secondary
                    bg-[#F8FAFC]
                    text-sm
                  "
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-text
                    hover:text-secondary
                    hover:bg-[#F8FAFC]
                    text-sm
                    transition
                  "
                >
                  <span>Technologies</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-text
                    hover:text-secondary
                    hover:bg-[#F8FAFC]
                    text-sm
                    transition
                  "
                >
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-text
                    hover:text-secondary
                    hover:bg-[#F8FAFC]
                    text-sm
                    transition
                  "
                >
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-text
                    hover:text-secondary
                    hover:bg-[#F8FAFC]
                    text-sm
                    transition
                  "
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
