import Link from "next/link";

const Nav = () => {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <h2 className="text-lg px-1 font-medium relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow transition-all duration-500 group-hover:w-full"></span>
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
