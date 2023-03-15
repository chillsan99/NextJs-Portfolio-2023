import React, { useState } from 'react'
import { projectData } from '@/pages/data'
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'

const Card = ({setDarkMode}) => {
  return (
    <>
        <div className='m-auto flex flex-col gap-10 lg:flex-row lg:flex-wrap w-3/4'>
        {projectData.map((data, key) =>{
            return(
                    <div key={key} className= "dark:bg-gray-800 drop-shadow-lg border-2 rounded-2xl p-10 basis-1/3 flex-1 h-90">
                        <h4 className='text-xl pt-5 text-center font-medium py-2  dark:text-white'>{data.pr_name}</h4>
                        <div>
                            <p className='pb-2 text-md font-medium text-center  dark:text-white'>{data.lang_used}</p>
                            <p className='leading-8 sm:text-small pb-4 dark:text-white flex-1'>{data.about}</p>
                        <div className='flex justify-between relative flex-1'>
                            <a className='bg-cyan-400 p-3 rounded-2xl dark:text-white inset-x-0 bottom-0' 
                                href={data.projdemo_link}>Project Link</a>
                            <a className='bg-cyan-600 p-3 rounded-2xl dark:text-white' href={data.projgithub_link}><span className='flex flex-row '><AiFillGithub className='text-2xl mr-2'/>GitHub</span></a>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default Card