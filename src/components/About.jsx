
import about from '../assets/about.png';

const About = () => {
  return (
    <div>
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 py-20' id='about'>
     <div className=" mx-auto px-8 md:px-16 lg:px-24">
      <h2 className='text-4xl font-bold text-center
      mb-12'>About Me</h2>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center md:space-x-12">
        <img src={about} alt=""
         className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
     <div className="flex-1"> 
       <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
         I am a passionate MERN Stack Developer with hands-on experience in building full-stack 
              web applications. I specialize in crafting responsive, scalable solutions using MySQL, MongoDB, 
              Express, React, Tailwind CSS, and Node.js. My expertise lies in creating dynamic front-end interfaces 
              and robust back-end architectures. I’m dedicated to writing clean, efficient code and continually
              learning the latest technologies to improve as a software developer. Let’s collaborate 
              to turn innovative ideas into reality!
        </p>

        <div className="space-y-4">
          <div className="flex items-center mt-6">
            <label htmlFor='htmlandcss' className='w-2/12 mr-6'>HTML & css</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full
           transform transition-transform duration-300 hover:scale-105 w-10/12
          py-2 "></div>
          </div>
          </div>
          <div className="flex items-center mt-6 ">
            <label htmlFor='htmlandcss' className='w-2/12 mr-6'>React js & tailwind css</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full
           transform transition-transform duration-300 hover:scale-105 w-10/12
          py-2 "></div>
          </div>
          </div>

          <div className="flex items-center mt-6">
            <label htmlFor='htmlandcss' className='w-2/12 mr-6'>Node js</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full
           transform transition-transform duration-300 hover:scale-105 w-6/12
          py-2 "></div>
          </div>
          </div>

          <div className="flex items-center mt-6">
            <label htmlFor='htmlandcss' className='w-2/12 mr-6'>React Native</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full
           transform transition-transform duration-300 hover:scale-105 w-8/12
          py-2 "></div>
          </div>
          </div>
</div>

<div className="mt-12 flex justify-between text-center">
<div className="">
  <h3 className='text-2xl font-bold text-transparent bg-clip-text
  bg-gradient-to-r from-green-400 to-blue-500
  '>
1+</h3>
  <p>Year of Experience</p>
</div>

<div className="">
  <h3 className='text-2xl font-bold text-transparent bg-clip-text
  bg-gradient-to-r from-green-400 to-blue-500
  '>
5+</h3>
  <p>Projects completed</p>
</div>

</div>

      </div>
      </div> 
      </div>
      </div>
    </div>

  )
}

export default About
