import { FaFacebook, FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return ( 
      <footer className='border-b border-neutral-900 pb-4 lg:mb-35 py-20' id='footer'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
    <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="flex-1 mb-4 md:mb-0 ">
<h2 className='text-2xl font-bold
     mb-2 text-left'>Eugene</h2>
    <p className="text-gray-400 text-left">
Full-Stack Developer spacialising in web and mobile app developement
    </p>
</div>
<div className="flex-1 w-full">
<form className="flex items-center justify-center">
    <input 
    type='email'
     placeholder='Your Email'
     className="w-full p-2 rounded-l-lg bg-gray-800 border
   border-gray-600 focus:outline-none focus:border-green-400"
     />
    <button 
    type="submit"
    className='bg-gradient-to-r from-green-400 to-blue-500 text-white
 rounded-r-lg px-4  py-2'
    >Subscribe</button>
    </form>
</div>
</div>

<div className=" pt-4 flex
flex-col md:flex-col lg:flex-row justify-between items-center
">
<p className="text-gray-400">
    &Copy; {new Date().getFullYear()} Eugene. All rights reserved
</p>
    
    <div className="flex space-x-4 my-4 md:my-0">
 <a href="#" className="text-gray-400 hover:text-white">
    <FaFacebook/>
 </a>
 <a href="#" className="text-gray-400 hover:text-white">
    <FaLinkedin/>
 </a>
 <a href="#" className="text-gray-400 hover:text-white">
    <FaMedium/>
 </a>
 <a href="#" className="text-gray-400 hover:text-white">
    <FaTwitter/>
 </a>
 <a href="#" className="text-gray-400 hover:text-white">
    <FaGithub/>
 </a>
   </div>

<div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white">
        Privacy
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
        Terms of Services
    </a>
</div>

</div>

      </div>
    </footer>
  )
}

export default Footer
