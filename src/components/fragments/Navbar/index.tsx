"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-16 w-full text-white bg-transparent">
      <div className="block lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between p-4 md:p-8">
          <Link href="/" className="text-lg font-bold uppercase md:text-xl lg:text-2xl">
            Macro
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="group inline-flex items-center justify-center transition-all duration-300 hover:text-secondary"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {!isOpen ? (
                  <>
                    <path
                      className="origin-right transform transition-all duration-300 group-hover:scale-x-125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16"
                    />
                    <path
                      className="origin-center transform transition-all duration-500 group-hover:scale-x-110"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12h16"
                    />
                    <path
                      className="origin-left transform transition-all duration-700 group-hover:scale-x-125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 18h16"
                    />
                  </>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 lg:opacity-100"} 
            lg:max-h-screen overflow-hidden transition-all duration-300 ease-in-out bg-primary/80 lg:bg-transparent px-4 md:px-8 lg:px-0 lg:flex lg:items-center lg:justify-evenly lg:w-1/2
            `}
        >
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/workshops" title="Workshops" />
          <NavLink href="/portfolio" title="Portfolio" />
          <NavLink href="/contact" title="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
