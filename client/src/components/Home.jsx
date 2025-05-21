import React from 'react'
import Main from './Main'

function Home() {
  return (
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
  )
}

export default Home
