import React from 'react'

function Main() {
  return (
    <div className="relative flex justify-center md:ml-12">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cyan-500/25 via-sky-500/10 to-violet-500/25 blur-2xl" />
      <img
        className="h-[240px] w-[240px] rounded-full border-4 border-cyan-400/40 object-cover shadow-xl shadow-cyan-950/30 md:h-[280px] md:w-[280px]"
        src="/navneet.jpg"
        alt="Navneet Mishra"
      />
    </div>
  )
}

export default Main
