"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import Menu from "./Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between border-b-[1.5px] bg-[#FDFDFD] px-4 py-6 pl-4 md:border-b-2 md:p-0 md:pl-[6.25rem] lg:border-[#121321]">
      <ul className="hidden md:flex md:gap-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Nook N Cradle Logo"
          width={180}
          height={24}
        />
      </Link>

      <button
        className="md:hidden"
        type="button"
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-text-dark"
          >
            <line x1="2" y1="6" x2="19" y2="6" stroke="black" strokeWidth="2" />
            <line
              x1="2"
              y1="13"
              x2="19"
              y2="13"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      <Link
        className="hidden bg-[#121321] px-12 py-9 text-[#FDFDFD] md:block"
        href="/login"
      >
        Book appointment
      </Link>

      <Menu menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
