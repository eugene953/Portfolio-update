import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0axn137', 
            'template_bobjvf4',
             form.current, {
          publicKey: 'F-f5VtEVEwPuwj7Wh',
        })
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 py-20' id='contact'>
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
     <h2 className='text-4xl font-bold text-center
     mb-12'>Contact Me</h2>
     <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="flex-1 text-left ">
     <h3 className="text-3xl font-bold text-transparent bg-clip-text
     bg-gradient-to-r from-green-400 to-blue-400 mb-4
     ">Let's Talk</h3>
     <p className="">I'm open to discussing web projects or opportunities.</p>

<div className="mb-4 mt-8">
  <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
<a href="mailto:nfouaeugene545@gmail.com" className="hover:underline">
nfouaeugene545@gmail.com
</a>
</div>

<div className="mb-4 ">
<FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
<span>+237 678697513</span>
</div>
  
  <div className="mb-4 ">
<FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
<span>Street, City, Province, Country</span>
</div>
</div> 
<div className="flex-1 w-full">

   <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="">
         <label htmlFor="name" className="block mb-2 text-left">Your Name</label>
          <input type="text"
        className="w-full p-2 rounded bg-gray-800 border
        border-gray-600 focus:outline-none focus:border-green-400" name="user_name"
        placeholder="Enter Your name"/>
        </div>

        <div className="">
         <label htmlFor="email" className="block mb-2 text-left">
            Email
            </label>
          <input type="email"
        className="w-full p-2 rounded bg-gray-800 border
        border-gray-600 focus:outline-none focus:border-green-400" name="user_email"
        placeholder="Enter Your Email"/>
        </div>

        <div className="">
         <label htmlFor="message" className="block mb-2 text-left">
            Message
            </label>
          <textarea type="text"
        className="w-full p-2 rounded bg-gray-800 border
        border-gray-600 focus:outline-none focus:border-green-400" name="message"
        placeholder="Enter Your Message"/>
        </div>
<button type="submit"  value="" className=' md:mr-40 lg:mr-150 bg-gradient-to-r from-green-400 to-blue-500 text-white
 md:inline transform transition-transform hover:scale-105 px-8 py-2 rounded-full '
>Send</button>
{done && "Thank you....."}
</form>

</div>
      </div>
      </div>
      </div>
     
  )
}

export default Contact
