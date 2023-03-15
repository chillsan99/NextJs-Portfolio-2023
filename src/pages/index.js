import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profileimage from '/public/profileimage.png'
import {BsFillSunFill, BsLinkedin, BsTwitter } from 'react-icons/bs'
import {AiFillGithub, AiFillMediumCircle} from 'react-icons/ai'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false); 
  return (
    <>
    <div className={darkMode ? "dark": ""}>

      <Head>
        <title> Cierra Hilliary </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="bg-white dark:transition duration-700 ease-in-out dark:bg-slate-900">
        <section className="min-h-screen">
          <nav className='pt-6 mb-6 flex justify-between px-10'> 
            <h1 className='text-xl dark:text-white sm: invisible md:visible dark:font-medium'>chillsan99</h1>
            <div>
              <ul className='flex justify-content text-center ml-12 gap-5 font-medium dark:text-white'>
                <li onClick={() => window.location.replace("/#about")}>About</li>
                <li onClick={() => window.location.replace("/#projects")}>Projects</li>
                <li onClick={() => window.location.replace("#/skills")}>Skills</li>
              </ul>
            </div>
            <ul className='flex items-center'>
              <li><BsFillSunFill className='dark:text-white' onClick={() => setDarkMode(!darkMode)}/></li>
              <li>
                <a className="bg-gradient-to-tr from-cyan-200 to-purple-300 text-white px-5 py-2 rounded-md ml-8 drop-shadow-md transition ease-in-out delay-75 hover:drop-shadow-xl dark:text-black" href='#'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <hr/>
          <div className='text-center p-10'>
          <div className='relative'>
            <h2 className='lg:text-5xl py-10 text-cyan-400 font-medium transition duration-300 ease-in-out hover:text-purple-300 transform md:text-5xl sm: text-4xl'>Cierra Hilliary </h2>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col  sm: invisible md:visible'>
                <span><a href="https://github.com/chillsan99"><AiFillGithub className='text-black transition duration 300 ease-in-out mt-10 mr-10 text-3xl dark:text-white'/></a></span>
                <span><a href="https://www.linkedin.com/in/cierra-h-762032138/"><BsLinkedin className='text-black transition duration 300 ease-in-out mt-10 text-3xl dark:text-white '/></a></span>
                <span><a href="https://medium.com/@cierra.hilliary"><AiFillMediumCircle className='text-black transition duration 300 ease-in-out mt-10 text-4xl dark:text-white '/></a></span>
              </div>
                <Image className='rounded-2xl mr-20 justify-center w-80 mb-2.5' src={profileimage} alt="chillsan99" layout="fix"/>
            </div>
         </div>
            <h3 className='text-2xl pt-6 dark:text-white'> Aspiring Front-End Developer 😃</h3>
            <p className='text-md py-5 text-gray-800  dark:text-white'> I&apos;m a student from Washington and Jefferson College&apos;s graduating class of 2021. I&apos;m very interested in Software Engineering, especially the one of Web applications, games, or whatever it may be! </p>
          </div>
        
        {/*  About me go here */}
          <div id='about' className='pt-10 pb-2 justify-center mx-auto md:w-2/3'>
            <h3 className='text-2xl pb-4 text-center dark:text-white'>About me</h3>
            <div className='justify-center mx-auto mb-2.5'>
            <p className='text-md py-2 leading-8 text-gray block md:w-30 sm: m-10 dark:text-white'> I originally started my career back in High School doing graphic design, and from there I wanted to branch 
            out into something more and do something greater, like programming. Originally, I went to Washington and Jefferson college in 2017 to try to do video game devleopment, and general programming,
            only to fall in love with Front-End Development. </p>
            </div>
          </div>
        </section>
        <section>
          <div id = "skills">
            <h3 className='text-center font-medium py-5 text-xl dark:text-white'>Programming Languages </h3>
              <ul className='pt-10 flex flex-wrap m-auto justify-center mb-6 text-lg text-gray-900 dark:text-white'>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-orange-300'>Javascript</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-red-400'>HTML</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-blue-600'>CSS</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-blue-300'>React </li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-orange-300'>Java</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-green-300'>Python</li>
              </ul>
              <h3 className=' text-center font-medium py-2 text-xl dark:text-white'> Other </h3>
                <ul className='pt-10 flex flex-wrap m-auto justify-center mb-6 text-lg text-gray-900 dark:text-white'>
                  <li className='mr-10 transition duration-300 ease-in-out hover:text-orange-300'>Adobe Photoshop</li>
                  <li className='mr-10 transition duration-300 ease-in-out hover:text-red-400'>Illustrator</li>
              </ul>
          </div>
        </section>
        <section>
          {/*  Projects go here */}
          <div id="projects">
            <h3 className='py-10 text-2xl dark:text-white text-center'> Projects </h3>
            <div className='py-5 lg:flex lg:w-2/3 sm:w-4/5 sm: mx-10 md:mx-auto pb-20'>
                <div lassName= "dark:bg-gray-800 drop-shadow-lg border-2 rounded-2xl p-10 basis-1/3 flex-1 h-90">
                        <h4 className='text-xl pt-5 text-center font-medium py-2  dark:text-white'>Haechan Bot</h4>
                        <div>
                            <p className='pb-2 text-md font-medium text-center  dark:text-white'>Python</p>
                            <p className='leading-8 sm:text-small pb-4 dark:text-white flex-1'>First Python project, where I used the twitterAPI to fetch tweets about the Korean Pop idol, Haechan of NCT.</p>
                        <div className='flex justify-between relative flex-1'>
                            <a className='bg-cyan-400 p-3 rounded-2xl dark:text-white inset-x-0 bottom-0' 
                                href= "https://twitter.com/HaechanBot66">Project Link</a>
                            <a className='bg-cyan-600 p-3 rounded-2xl dark:text-white' href="https://github.com/chillsan99/Haechan-Bot"><span className='flex flex-row '><AiFillGithub className='text-2xl mr-2'/>GitHub</span></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </section>
        <section>
        </section>
        <div className='text-center gap-8 py-5 px-6 text-4xl bg-cyan-400 rounded-t-lg mx-2'>
            <span className='text-sm'> Credit to Pepper Jackets via PicCrew for the photo! </span>
              <div className='flex justify-center px-6 gap-8  pt-5'>
                <span><a href="https://github.com/chillsan99"><AiFillGithub className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-black'/></a></span>
                <span><a href="https://www.linkedin.com/in/cierra-h-762032138/"><BsLinkedin className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-blue-800' /></a></span>
                <span><a href="https://medium.com/@cierra.hilliary"><AiFillMediumCircle className='text-white text-3xl transition duration 300 ease-in-out dark:text-black hover:text-blue-800' /></a></span>
              </div>
            <span className='text-sm'>chillsan99, 2023, Built with NextJS and Tailwind CSS.</span>
        </div>
      </main>
      </div>
    </>
  );
}
