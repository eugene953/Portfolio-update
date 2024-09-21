import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='justify-center items-center text-white px-8 md:px-8 lg:px-24'>
      <div className="container py-2 flex justify-center md:justify-between items-center">
  <div className="text:3xl font-bold hidden md:inline"> EUGENE MGBA</div>
   <div className="lg:space-x-10 sm:space-x-2 md:text-1xl hidden md:flex">
    <a href="#home" className="hover:text-gray-400">Home</a>
    <a href="#about" className="hover:text-gray-400">About Me</a>
    <a href="#service" className="hover:text-gray-400">Services</a>
    <a href="#project" className="hover:text-gray-400">Projects</a>
    <a href="#contact" className="hover:text-gray-400">Contact</a>
   </div>

<button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
 hidden md:inline transform transition-transform hover:scale-105 px-4 py-2 rounded-full '
 >Connect Me</button>
      </div>

<div  onClick={handleNav}  className="block md:hidden mb-5">
  {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={30}/>}
  
</div>

<div className={!nav ? 'flex flex-col left-0 px-8 mb-9 top-0 w-[90%] h-full bg-white text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
<div className="text:xl font-bold md:inline m-4"> EUGENE MGBA</div>

  <div className="pt-5 flex flex-col gap-3 text-left uppercase">
   <a href="#home" className="border-b border-gray-500 hover:text-blue-400">Home</a>
    <a href="#about" className="border-b border-gray-500 hover:text-blue-400">About Me</a>
    <a href="#service" className="border-b border-gray-500 hover:text-blue-400">Services</a>
    <a href="#project" className="border-b border-gray-500 hover:text-blue-400">Projects</a>
    <a href="#contact" className="border-b border-gray-500 hover:text-blue-400">Contact</a>
</div>
</div>

    </nav>
  )
}

export default Navbar
