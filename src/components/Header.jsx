"use client";

import Link from "next/link";
import Nav from "./Nav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="py-5 xl:py-7 bg-gray-200">
      <div className="container flex mx-auto px-5 py-5 items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Hanyun<span className="text-bright">.</span>
          </h1>
        </Link>

        {/* navbar */}
        <div className="flex items-center space-x-6">
          <Nav />

          {/* Hire me special button */}
          <a
            href="mailto:hanyzhang1@gmail.com"
            className="text-lg px-2 bg-bright font-medium hover:bg-gray-500 hover:text-bright"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
