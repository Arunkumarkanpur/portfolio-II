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
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-10 shadow-2xl shadow-cyan-950/30 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />

        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Available for opportunities
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Hey, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">Navneet Mishra</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
             B.Tech Computer Science graduate specializing in Data Science and Artificial Intelligence, with a passion for creative visual design. I bridge the gap between analytical problem-solving and intuitive user experiences—combining machine learning and data-driven insights with sharp visual storytelling, UI/UX, and graphic design.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Main />
          </div>
        </div>
      </div>


      <div className="mt-7 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 shadow-xl shadow-cyan-950/20 md:p-8">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text">
              Available on
            </h1>
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
          </div>

          <ul className="flex flex-wrap justify-center gap-4 md:gap-5">
            <li className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10">
              <a href="https://www.linkedin.com/in/navneet-mishra-274762191" target="_blank" rel="noreferrer">
                <FaLinkedin className="cursor-pointer text-4xl text-cyan-300 transition duration-200 hover:scale-110" />
              </a>
            </li>
            <li className="rounded-2xl border border-slate-600/40 bg-slate-800/80 p-3 transition hover:-translate-y-1 hover:border-white/40 hover:bg-slate-700/80">
              <a href="https://www.github.com/Navneeettt" target="_blank" rel="noreferrer">
                <FaGithubSquare className="cursor-pointer text-4xl text-white transition duration-200 hover:scale-110" />
              </a>
            </li>
            <li className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3 transition hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-500/10">
              <a href="https://x.com/Navnneett" target="_blank" rel="noreferrer">
                <FaSquareXTwitter className="cursor-pointer text-4xl text-sky-300 transition duration-200 hover:scale-110" />
              </a>
            </li>
            <li className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-3 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10">
              <a href="https://t.me/navneeettt" target="_blank" rel="noreferrer">
                <SiTelegram className="cursor-pointer text-4xl text-blue-300 transition duration-200 hover:scale-110" />
              </a>
            </li>
            <li className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-3 transition hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10">
              <a href="https://www.instagram.com/hi.navneet" target="_blank" rel="noreferrer">
                <FaSquareInstagram className="cursor-pointer text-4xl text-pink-300 transition duration-200 hover:scale-110" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-14 border-slate-700" />
    </>
  )
}

export default Home
