import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profileimage from '/public/profileimage.png'
import Footer from '@/components/Footer'
import {BsFillSunFill } from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import Card from '@/components/Card'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? "dark": ""}>

      <Head>
        <title> Cierra Hilliary </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="bg-white dark:transition duration-700 ease-in-out dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className='pt-6 mb-6 flex justify-between px-10'> 
            <h1 className='text-xl dark:text-white dark:font-medium'>chillsan99</h1>
            <ul className='flex items-center'>
              <li><BsFillSunFill className='dark:text-white' onClick={() => setDarkMode(!darkMode)}/></li>
              <li>
                <a className=" bg-gradient-to-tr from-cyan-200 to-purple-300 text-white px-5 py-2 rounded-md ml-8 drop-shadow-md transition ease-in-out delay-75 hover:drop-shadow-xl dark:text-black" href='#'>
                  Resume
                </a>
              </li>
              <li className='pl-7 text-3xl font-medium text-black dark:text-white'><BiMenu/></li>
            </ul>
          </nav>
          <hr/>
          <div className='text-center p-10'>
          <div className='relative'>
            <h2 className='lg:text-5xl py-7 text-cyan-400 font-medium transition duration-300 ease-in-out hover:text-purple-300 transform md:text-6xl'>Cierra Hilliary </h2>
            <Image className='rounded-2xl justify-center mx-auto w-80 mb-2.5' src={profileimage} layout="fix"/>
         </div>
            <h3 className='text-2xl pt-6 dark:text-white'> Aspiring Front-End Developer 😃</h3>
            <p className='text-md py-5 text-gray-800  dark:text-white'> I&#39;m an aspiring front-end engineer. Currently, I&#39;m focused on building the most creative things I can find! </p>
          </div>
        
        {/*  About me go here */}
          <div className='pt-10 pb-2 justify-center mx-auto md:w-2/3'>
            <h3 className='text-2xl pb-4 text-center dark:text-white'> About me</h3>
            <div className='justify-center mx-auto mb-2.5'>
            <p className='text-md py-2 leading-8 text-gray block md:w-full dark:text-white'> I originally started my career back in High School doing graphic design, and from there I wanted to branch 
            out into something more and do something greater, like programming. Originally, I went to Washington and Jefferson college in 2017 to try to do video game devleopment, and general programming,
            only to fall in love with Front-End Development. From there I&#39;ve built tons of programs and branched out my skills in HTML, CSS, Javascript, and is always craving to learn more!</p>
          
            <p className='text-md pt-6 leading-8 text-gray- dark:text-white'> Over the course of my time studying and graduating, I&#39;ve studied and 
            worked with a bunch of different technologies and programming languages. So Far, I have worked with: Javascript, HTML, CSS, React, Java, Python, and more! </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' text-center font-medium py-5 text-xl dark:text-white'>Programming Languages </h3>
              <ul className='pt-10 flex flex-wrap items-center justify-center mb-6 text-lg text-gray-900 dark:text-white'>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-orange-300'>Javascript</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-red-400'>HTML</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-blue-600'>CSS</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-blue-300'>React </li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-orange-300'>Java</li>
                <li className='mr-10 transition duration-300 ease-in-out hover:text-green-300'>Python</li>
              </ul>
          </div>
        </section>
        <section>
          {/*  Projects go here */}
          <h3 className='py-10 text-2xl dark:text-white text-center'> Projects </h3>
          <div className='py-5 lg:flex lg:w-2/3 sm:w-4/5 mx-auto pb-20'>
            <Card/>
          </div>
          
        </section>
        <section>
        </section>
        <Footer/>
      </main>
      </div>
    </>
  );
}
