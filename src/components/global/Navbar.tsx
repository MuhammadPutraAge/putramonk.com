"use client";

import { NAVBAR_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="absolute top-0 left-0 w-screen flex justify-between md:justify-center items-center px-120 lg:px-80 py-42 bg-transparent text-white"
      >
        <Link href="/">
          <Image
            src="images/logo.svg"
            alt="MONK Logo"
            width={120}
            height={22}
          />
        </Link>

        <ul className="flex md:hidden">
          {NAVBAR_LINKS.map((navItem) => (
            <li key={navItem.linkTitle} className="mr-32 last:mr-0">
              <Link
                href={navItem.href}
                className="text-right text-16 font-semibold"
              >
                {navItem.linkTitle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
