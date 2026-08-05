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
    { id: 1, logo: canva, name: "Canva", color: "from-pink-500/20 to-rose-500/10 border-pink-400/30" },
    { id: 2, logo: figma, name: "Figma", color: "from-violet-500/20 to-purple-500/10 border-violet-400/30" },
    { id: 3, logo: html, name: "HTML", color: "from-orange-500/20 to-red-500/10 border-orange-400/30" },
    { id: 4, logo: css, name: "CSS", color: "from-blue-500/20 to-cyan-500/10 border-blue-400/30" },
    { id: 5, logo: java, name: "Java", color: "from-amber-500/20 to-yellow-500/10 border-amber-400/30" },
    { id: 6, logo: javascript, name: "JavaScript", color: "from-yellow-500/20 to-orange-500/10 border-yellow-400/30" },
    { id: 7, logo: clang, name: "C language", color: "from-cyan-500/20 to-sky-500/10 border-cyan-400/30" },
  ]

  return (
    <>
      <div name="Experience" className="mx-auto mt-12 max-w-screen-2xl text-white container px-1 md:px-1">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 shadow-2xl shadow-cyan-950/20 md:p-6">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text">
            Experience
          </h1>
          <p className="mt-2 text-slate-300 font-medium">
            I&apos;ve more than 2 years of experience in below technologies.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
            {cardItem.map(({ id, logo, name, color }) => (
              <div
                key={id}
                className={`flex flex-col items-center justify-center rounded-2xl border bg-gradient-to-br p-3 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${color}`}
              >
                <img className="h-[70px] w-[70px] rounded-xl object-cover p-1 shadow-md shadow-slate-950/40" src={logo} alt={name} />
                <div className="mt-3 text-center text-sm font-bold text-slate-100">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-12 border-slate-700" />
    </>
  )
}

export default Port
