import React from "react";

const test = () => {
  return (
    <nav className="flex items-center justify-between border-b-[1.5px] border-[#121321] bg-[#FDFDFD] px-4 py-6 pl-4 md:border-b-2 md:p-0 md:pl-[6.25rem]">
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
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-text-dark"
          >
            <path
              d="M14.9964 0.994202L1.00488 14.9857"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M15.0003 14.9943L0.99707 0.988159"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinejoin="round"
            />
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

export default test;
