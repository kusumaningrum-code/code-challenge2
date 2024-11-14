"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-pink-100 bg-opacity-80 px-4 sm:px-6 py-4 sticky top-0 z-50 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 sm:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div className="hidden sm:flex gap-2 sm:gap-4">
          <Link
            href="/"
            className="text-sm sm:text-lg font-bold text-[#5e4d54]"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm sm:text-lg font-bold text-[#5e4d54]"
          >
            Blog
          </Link>
          <Link
            href="/produk"
            className="text-sm sm:text-lg font-bold text-[#5e4d54]"
          >
            Our Products
          </Link>
        </div>
      </div>

      <div className="logo">
        <Image
          src="/logo0.png"
          alt="De La Reina Logo"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />
      </div>

      <div className="hidden sm:flex gap-2 sm:gap-4">
        <Link
          href="/purchase"
          className="text-sm sm:text-lg font-bold text-[#5e4d54]"
        >
          Purchase
        </Link>
        <Link
          href="/review"
          className="text-sm sm:text-lg font-bold text-[#5e4d54]"
        >
          Review
        </Link>
        <Link
          href="/tim"
          className="text-sm sm:text-lg font-bold text-[#5e4d54]"
        >
          Our Team
        </Link>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-white absolute top-full left-0 w-full border-t border-gray-200 shadow-lg">
          <Link
            href="/"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/produk"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Our Products
          </Link>
          <Link
            href="/purchase"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Purchase
          </Link>
          <Link
            href="/review"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Review
          </Link>
          <Link
            href="/tim"
            className="py-2 text-sm font-bold text-[#5e4d54]"
            onClick={() => setMenuOpen(false)}
          >
            Our Team
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
