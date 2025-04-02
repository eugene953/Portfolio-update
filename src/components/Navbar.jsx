import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-screen fixed top-0 left-0 bg-black text-white z-50">
      <div className="container mx-auto py-4 flex justify-between items-center px-6">
    
            <a href="#home" className="text-3xl font-bold hidden md:inline">EUGENE MGBA </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Connect Me Button */}
        <a href="mailto:nfouaeugene545@gmail.com" className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
          Connect Me
        </a>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-screen h-full bg-white text-black px-8 py-6 transform transition-transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="text-xl font-bold">EUGENE MGBA</div>
        <div className="mt-6 flex flex-col space-y-4 text-lg uppercase">
          <a href="#home" className="border-b border-gray-500 pb-2 hover:text-blue-400" onClick={handleNav}>Home</a>
          <a href="#about" className="border-b border-gray-500 pb-2 hover:text-blue-400" onClick={handleNav}>About Me</a>
          <a href="#service" className="border-b border-gray-500 pb-2 hover:text-blue-400" onClick={handleNav}>Services</a>
          <a href="#project" className="border-b border-gray-500 pb-2 hover:text-blue-400" onClick={handleNav}>Projects</a>
          <a href="#contact" className="border-b border-gray-500 pb-2 hover:text-blue-400" onClick={handleNav}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
