"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <nav className="flex space-x-6 ">
     
        {navLinks.map((link, index) => {
          return (
            <Link href={link.href} key={index} className={`${link.href === pathname && "border-b-2 border-bright"} text-lg px-1 font-medium relative group`}>
                {link.name}
                <span className={`${link.href !== pathname && "underline-animation"}`}></span>
              
            </Link>
          )
          
})}
   
    </nav>
  );
};

export default Nav;
