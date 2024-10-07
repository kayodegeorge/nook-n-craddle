import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 bg-[#FEF7F6] px-4 py-24 md:flex-row md:items-center md:justify-between md:px-[6.25rem] md:py-[4.5rem]">
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
          <Link className="ease-in-out hover:text-[#F59488]" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="ease-in-out hover:text-[#F59488]" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="ease-in-out hover:text-[#F59488]" href="/terms">
            Terms
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          className="rounded-full border border-[#121321] bg-[#FDFDFD] px-3 py-3 transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:bg-primary-black hover:text-white"
          href="https://www.facebook.com/nookncradle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="rounded-full border border-[#121321] bg-[#FDFDFD] px-3 py-3 transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:bg-primary-black hover:text-white"
          href="https://www.facebook.com/nookncradle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
