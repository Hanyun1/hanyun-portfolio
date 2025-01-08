"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = ({ className }) => {
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
    <nav className={className}>
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
    </nav>
  );
};

export default Nav;
