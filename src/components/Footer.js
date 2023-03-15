import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub, AiFillMediumCircle} from 'react-icons/ai'

const Footer = () => {
  console.log("Stan NCT for clear skin")

  return (
      <div className='text-center gap-8 py-5 px-6 text-4xl bg-cyan-400 rounded-t-lg mx-2'>
            <span className='text-sm'> Credit to Pepper Jackets via PicCrew for the photo! </span>
              <div className='flex justify-center px-6 gap-8  pt-5'>
                <span><a href="https://github.com/chillsan99"><AiFillGithub className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-black'/></a></span>
                <span><a href="https://www.linkedin.com/in/cierra-h-762032138/"><BsLinkedin className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-blue-800' /></a></span>
                <span><a href="https://medium.com/@cierra.hilliary"><AiFillMediumCircle className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-blue-800' /></a></span>
              </div>
            <span className='text-sm'>chillsan99, 2023, Built with NextJS and Tailwind CSS.</span>
      </div>
  )
}

export default Footer