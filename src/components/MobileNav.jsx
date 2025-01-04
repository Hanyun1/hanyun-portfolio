"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { RiMenu3Line } from "react-icons/ri";

const MobileNav = ({ className }) => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
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
            {navLinks.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={`${link.href === pathname && "border-b-2 border-bright"} text-lg px-1 font-medium relative group`}
                >
                  {link.name}
                  <span
                    className={`${link.href !== pathname && "underline-animation"}`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
