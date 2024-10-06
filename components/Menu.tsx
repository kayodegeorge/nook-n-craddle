"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  menuOpen: boolean;
};

const Menu = ({ menuOpen }: Props) => {
  return (
    <div
      className={cn(
        "fixed bottom-auto left-0 right-auto top-[78px] z-10 h-[calc(100vh-88px)] w-full bg-background p-3 transition-[transform,opacity] duration-[500ms] ease-in-out lg:hidden",
        !menuOpen &&
          "-translate-y-[calc(100%+120px)] p-3 lg:-translate-y-[calc(100%+120px)]",
      )}
    >
      <div className="mt-20 flex flex-col items-center gap-11 text-2xl text-primary-black">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          className="mt-16 rounded-lg border-2 border-primary-black bg-button px-9 py-5 text-primary-black"
          href="/contact"
        >
          <p className="font-medium"> Book appointment</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
