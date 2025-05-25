import React from 'react'
import Main from './Main'

import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


function Home() {
  return (
    <>

    <div className='grid grid-cols-1 md:grid-cols-2 md:mt-25 mt-10 md:gap-21 gap-12'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl text-green-400'>Hey, I'm Navneet Mishra</h1>
      <div className=' text-2xl mt-3'>
final-year B.Tech Computer Science student with a passion for technology and design. I have experience in graphic design, UI/UX design using Canva and enjoy creating clean, engaging visuals. I'm looking for opportunities where I can use both my technical and creative skills.
      </div>
      </div>

      <div>
        <Main/>
      </div>
    </div>
    <hr className='mt-14'/>

   

  <div className='flex flex-col justify-center  text-center md:flex-row mt-7'>
<div className='space-y-3 mt-7'>
    <h1 className='font-bold text-blue-500 text-2xl'>Available on</h1>
<ul className='flex justify-center space-x-6 p-3'>

    <li><a href="https://www.linkedin.com/in/arunkumar791/" target='blank'>
        <FaLinkedin className='text-4xl md:text-4xl text-white
        cursor-pointer hover:scale-150 duration-200'/> </a> </li>
    <li><a href="https://www.github.com/Arunkumarkanpur" target='blank'>
        <FaGithubSquare className='text-4xl md:text-4xl text-white cursor-pointer hover:scale-150 duration-200'/></a> </li>
    <li><a href="https://www.x.com/arunkumar796" target='blank'>
        <FaSquareXTwitter className='text-4xl md:text-4xl text-white cursor-pointer hover:scale-150 duration-200'/></a></li>
    <li><a href="https://t.me/" target='blank'>
        <SiTelegram className='text-4xl md:text-4xl text-white cursor-pointer hover:scale-150 duration-200'/></a></li>
    <li>
        <a href="https://www.instagram.com/arun_kumar1572" target='blank'>
        <FaSquareInstagram  className='text-4xl md:text-4xl text-white cursor-pointer hover:scale-150 duration-200'/></a>
    </li>
</ul>

</div>
</div>
<hr className='mt-14' />

</>
      
  )
}

export default Home
