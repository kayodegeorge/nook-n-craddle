import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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

      <button className="md:hidden" type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 8L2 8"
            stroke="#121321"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22 17H2"
            stroke="#121321"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <Link
        className="hidden bg-[#121321] px-12 py-9 text-[#FDFDFD] md:block"
        href="/login"
      >
        Book appointment
      </Link>
    </nav>
  );
};

export default Navbar;
