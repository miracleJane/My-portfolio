import React from 'react'
import { IoLogoGithub, IoMail, IoPhonePortrait } from 'react-icons/io5'

const Connect = () => {
  return (
    <div className=' px-10'>
        <p className=' text-[2rem] mt-5 px-10 '>Get In Touch</p>
        <div className=' w-full gap-5 grid grid-cols-2 px-10 '>
            <div className='col-span-1 border-2 border-gray-200 rounded-md px-3 shadow-lg py-3'>
               <p className='mt-2 text-[1.5rem] font-semibold'>Send Me A Message</p>
               <div className='mt-3 '>
                   <p className='mb-2'>Your Name</p>
                   <input className='w-[60%] h-8 shadow-sm outline-none border-gray-400 border-1 indent-2' placeholder='enter your name'  type="text" />
               </div>
                <div className='mt-2 '>
                   <p className='mb-2'>Your Email</p>
                   <input className='w-[60%] h-8 shadow-sm outline-none border-gray-400 border-1 indent-2' placeholder='enter your email'  type="text" />
               </div>
               <div className='mt-2 '>
                   <p className='mb-2'>Message</p>
                   <textarea className='w-[60%] shadow-sm  outline-none resize-none border-gray-400 border-1 indent-2 h-20' 
                    placeholder='type your message here..'  maxLength="300">
                   </textarea>
                   <div>
                    <button className='bg-[#f4ddb9] px-4 py-2 rounded-md mt-2'>Send Message</button>
                  </div>
                   
               </div>
            </div>
            <div className=' col-span-1 border-2 border-gray-200 rounded-md px-3 shadow-lg py-3'>
                  <p className='mt-2 text-[1.5rem] font-semibold'>Contact Information</p>
                  <div className='h-20 w-full flex items-center '>
                    <div className='bg-[#f4ddb9] h-15 w-15 rounded-[50px] ml-3 flex justify-center items-center'>
                       <IoMail style={{fontSize:"20px"}}/>
                    </div>
                    <div className='ml-5 '>
                       <p className='font-semibold text-[1rem]'>Email Address</p>
                        <p className='text-gray-400 mt-1'>example@example.com</p>
                    </div>
                  </div>
                  {/* <div className='h-20 w-full  flex items-center '>
                    <div className='bg-[#f4ddb9] h-15 w-15 rounded-[50px] ml-3 flex justify-center items-center'>
                       <IoPhonePortrait style={{fontSize:"20px"}}/>
                    </div>
                    <div className='ml-5'>
                       <p className='font-semibold text-[1rem]'>Phone Number</p>
                        <p className='text-gray-400 mt-1'>+1 (123) 456-7890</p>
                    </div>
                  </div> */}
                  {/* <div className='h-20 w-full flex items-center '>
                    <div className='bg-[#f4ddb9] h-15 w-15 rounded-[50px] ml-3 flex justify-center items-center'>
                      home
                    </div>
                    <div className='ml-5'>
                       <p className='font-semibold text-[1rem]'>Location</p>
                        <p className='text-gray-400 mt-1'>your City, Country</p>
                    </div>
                  </div> */}
                  <div className=' h-23 '>
                    <p className='font-semibold text-[1rem] ml-10 my-5'>Connect with me</p>
                    <div className='flex ml-8' > 
                      <div className='bg-[#f4ddb9] h-15 w-15 rounded-[50px] ml-3  mt-1 flex justify-center items-center' title='github'><IoLogoGithub style={{fontSize:"24px"}}/></div>
                      <div className='bg-[#f4ddb9] h-15 w-15 rounded-[50px] ml-3  mt-1 flex justify-center items-center font-semibold text-[20px]' title='twitter'> X </div>
                    </div>
                  
                  </div>
            </div>
        </div>
        <div className='h-10'></div>
    </div>
  )
}

export default Connect