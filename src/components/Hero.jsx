
import pic from '../assets/pic.png'
import resume from '../assets/Resume.pdf'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start 
          text-center lg:text-left">
            <h1 className='pb-16 text-6xl font-thin tracking-tight 
            lg:mt-16 lg:text-8xl md:mt-10'>
              Nfoua Eugene
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
            I am a passionate full-stack developer with
            a focus on building modern and responsive  web and mobile applications.
            With a foundation in both frontend and backend technologies,I strive to create
            seamless and efficient user experiences.
             
            </p>

            <div className="flex space-x-4 mt-4 mb-6 ">
              <a href="mailto:tim@gmail.com" className="bg-gradient-to-r from-green-400 to-blue-500 text-white
               md:inline transform transition-transform hover:scale-105 px-6 py-2 
              rounded-md " id='contact'>Contact Me</a>
              <a href={resume} download="Resume" className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white
               md:inline transform transition-transform hover:scale-105 px-6 py-2 
              rounded-md">Resume</a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 sm:mt-4 md:mt-2">
          <div className="flex justify-center lg:justify-end">
            <img src={pic} alt='Profile' className='w-80 h-100 rounded object-cover mb-2 md:mb-0'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
