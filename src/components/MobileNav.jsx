"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { RiMenu3Line } from "react-icons/ri";

const MobileNav = ({ className }) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentHash = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight * 0.3;
        if (window.scrollY >= sectionTop) {
          currentHash = `#${section.id}`;
        }
      });

      setActiveHash(currentHash);
    };

    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", name: "Home" },
    { href: "#projects", name: "Projects" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <div className={`${className}`}>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <RiMenu3Line className="text-[24px]" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-white items-center gap-20">
          {/* logo */}
          <SheetTitle>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Hanyun<span className="text-bright">.</span>
              </h1>
            </Link>
          </SheetTitle>

          <div className="flex flex-col gap-5 justify-center items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  activeHash === link.href ? "border-b-2 border-bright" : ""
                } text-lg px-1 font-medium relative group`}
              >
                {link.name}
                <span
                  className={`${
                    activeHash === link.href ? "" : "underline-animation"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
