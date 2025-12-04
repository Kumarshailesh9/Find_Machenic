"use client";
import { FaTools } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-20 top-0 left-0 shadow bg-gray-800">
      <nav className="max-w-screen-xl mx-auto px-4 py-3 text-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <FaTools size={20} />
            <span className="text-xl font-semibold">FindMachenic</span>
          </a>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li>
              <a href="/oldcar" className="hover:underline">
                Used Car
              </a>
            </li>
            <li>
              <a href="/Emergency" className="hover:underline">
                Emergency (SOS)
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden mt-4 transition-all`}
        >
          <ul className="flex flex-col space-y-4 text-sm font-medium pb-4">
            <li>
              <a href="/oldcar" className="hover:underline">
                Used Car
              </a>
            </li>
            <li>
              <a href="/Emergency" className="hover:underline">
                Emergency (SOS)
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
