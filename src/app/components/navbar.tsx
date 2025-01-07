"use client"

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex items-center justify-between px-6 md:px-8 h-20 shadow-lg rounded-lg">
      {/* Logo */}
      <div>
        <h1 className="text-[#55e4fd] font-serif text-3xl sm:text-4xl font-extrabold">
          BLOGVERSE
        </h1>
      </div>

      {/* Navbar Links for Desktop */}
      <div className="hidden md:flex md:gap-5 lg:gap-8 text-lg md:text-xl lg:text-2xl font-bold font-mono text-white">
        <Link
          href="/"
          className="hover:text-[#55e4fd] transition-colors duration-300 ease-in-out hover:underline">
          HOME
        </Link>
        <Link
          href="/about"
          className="hover:text-[#55e4fd] transition-colors duration-300 ease-in-out hover:underline">
          ABOUT
        </Link>
        <Link
          href="/blog"
          className="hover:text-[#55e4fd] transition-colors duration-300 ease-in-out hover:underline">
          BLOGS
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#55e4fd] transition-colors duration-300 ease-in-out hover:underline">
          CONTACT
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white">
          &#9776;
        </button>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-r from-[#e8060696] via-[#ff5e009a] to-[#e7e70f96] z-50 rounded-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-2/3`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-6 text-3xl text-black font-bold active:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          &times;
        </button>

        {/* Menu Links */}
        <div className="flex flex-col mt-20 ml-8 space-y-6">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-black transition-colors duration-300 active:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-black transition-colors duration-300 active:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            ABOUT
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-black transition-colors duration-300 active:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            BLOGS
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-black transition-colors duration-300 active:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
