import React from 'react'

import html from "../../public/html.png";
import css from "../../public/css.png";
import clang from "../../public/clang.png";
import javascript from "../../public/javascript.jpg"
import java from "../../public/java.png"
import canva from "../../public/canva.jpg";
import figma from "../../public/figma.png"


function Port() {

const cardItem = [

     {
        id: 1,
        logo: canva,
        name:"Canva"
  
    },
    {
        id: 2,
        logo: figma,
        name:"Figma"
  
    },
    {
      id: 3,
      logo: html,
      name:"HTML"

    },
    {
      id: 4,
      logo: css,
      name:"CSS"

    },
    
    {
      id: 5,
      logo: java,
      name:"Java"

    },
    {
        id: 6,
        logo: javascript,
        name:"JavaScript"
  
    },
    {
        id: 7,
        logo: clang,
        name:"C language"
  
    },




  ]

  return (
     <>
    <div name="Experience" className='max-w-screen-2xl text-white  container mx-auto md:px-20px mt-10'>
        <div>
            <h1 className='text-3xl font-semibold text-blue-500'>Experience</h1>
            <p className='font-semibold mt-2'>I've more than 2 years of experience in below technologies.</p>

<div className='grid grid-cols-2 md:grid-cols-5 gap-7'>
{
  cardItem.map(({id,logo,name}) =>(
<div className='flex flex-col items-center justify-center border-[2px] bg-slate-400 rounded-md p-1 mt-7 cursor-pointer hover:scale-105 duration-300 gap-2' key={id}>
  <img className='w-[100px] p-1 rounded-md' src={logo} alt="" />
<div>
    <div className='font-bold text-xl px-2 mb-2'>{name}</div>

</div>

</div>
  ))
}
            </div>
        </div>
    </div>
    <br />
    <hr className='mt-9'/>
    </>
  )
}

export default Port
