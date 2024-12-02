import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container flex mx-auto bg-gray-200 px-16 py-10 items-end justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Hanyun<span className="text-yellow">.</span>
          </h1>
        </Link>

        {/* navbar */}
        <div className="flex space-x-6">
          <Nav />
          <button className="text-lg px-2 bg-yellow font-medium hover:bg-gray-500 hover:text-yellow">
            Hire me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
