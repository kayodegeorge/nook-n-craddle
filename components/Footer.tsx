import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#121321] bg-[#FEF7F6] px-4 py-24 md:flex md:items-center md:justify-between md:px-[6.25rem] md:py-[4.5rem]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Nook N Cradle Logo"
          width={297}
          height={41}
        />
      </Link>

      <ul className="flex flex-col gap-7 md:flex-row">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          className="rounded-full border border-[#121321] bg-[#FDFDFD] px-3 py-3"
          href="https://www.facebook.com/nookncradle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="rounded-full border border-[#121321] bg-[#FDFDFD] px-3 py-3"
          href="https://www.facebook.com/nookncradle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
