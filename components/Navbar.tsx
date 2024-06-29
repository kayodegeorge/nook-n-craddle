import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-[1.5px] border-[#121321] bg-[#FDFDFD] pl-4 md:border-b-2 md:pl-[6.25rem]">
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
