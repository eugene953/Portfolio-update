import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="justify-center items-center text-white px-8 md:px-8 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-3xl font-bold hidden md:inline">EUGENE MGBA</div>
        <div className="lg:space-x-10 sm:space-x-3 md:text-1xl hidden md:flex">
          <a href="#home" className="
          hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="
          hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="
          hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="
          hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="
          hover:text-gray-400">
            Contact
          </a>
        </div>

        <a href="mailto:tim@gmail.com"
          className="bg-gradient-to-r from-green-400
           to-blue-500 text-white hidden md:inline transform 
           transition-transform hover:scale-105 px-4 py-2 md:ml-8 rounded-full"
        >
          Connect Me
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden mb-5">
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[90%] h-full bg-white text-black ease-in-out duration-500 px-8"
            : "fixed left-[-100%]"
        }
      >
        <div className="text-xl font-bold md:inline m-4">EUGENE MGBA</div>

        <div className="pt-5 flex flex-col gap-3 text-left uppercase">
          <a href="#home" className="border-b border-gray-500 
          hover:text-blue-400" onClick={handleNav}>
            Home
          </a>
          <a href="#about" className="border-b border-gray-500
           hover:text-blue-400" onClick={handleNav}>
            About Me
          </a>
          <a href="#service" className="border-b border-gray-500
           hover:text-blue-400" onClick={handleNav}>
            Services
          </a>
          <a href="#project" className="border-b border-gray-500 
          hover:text-blue-400" onClick={handleNav}>
            Projects
          </a>
          <a href="#contact" className="border-b border-gray-500 
          hover:text-blue-400" onClick={handleNav}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
