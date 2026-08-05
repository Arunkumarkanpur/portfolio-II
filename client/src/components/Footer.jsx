import React from 'react'

import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa'
import { FaSquareXTwitter, FaSquareInstagram } from 'react-icons/fa6'
import { SiTelegram } from 'react-icons/si'
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-12">
      <footer className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-slate-200 shadow-2xl shadow-cyan-950/20">
        
        <nav className="mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/navneet-mishra-274762191" target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/30 bg-cyan-500/5 p-3 text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-500/10">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.github.com/Navneeettt" target="_blank" rel="noreferrer" className="rounded-full border border-slate-500/40 bg-slate-800/80 p-3 text-white transition hover:-translate-y-1 hover:bg-slate-700/80">
              <FaGithubSquare className="text-2xl" />
            </a>
            <a href="https://x.com/Navnneett" target="_blank" rel="noreferrer" className="rounded-full border border-sky-400/30 bg-sky-500/5 p-3 text-sky-300 transition hover:-translate-y-1 hover:bg-sky-500/10">
              <FaSquareXTwitter className="text-2xl" />
            </a>
            <a href="https://t.me/navneeettt" target="_blank" rel="noreferrer" className="rounded-full border border-blue-400/30 bg-blue-500/5 p-3 text-blue-300 transition hover:-translate-y-1 hover:bg-blue-500/10">
              <SiTelegram className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/hi.navneet" target="_blank" rel="noreferrer" className="rounded-full border border-pink-400/30 bg-pink-500/5 p-3 text-pink-300 transition hover:-translate-y-1 hover:bg-pink-500/10">
              <FaSquareInstagram className="text-2xl" />
            </a>
            <a href="mailto:navneet.mishra8586@gmail.com" className="rounded-full border border-slate-500/40 bg-slate-800/80 p-3 text-white transition hover:-translate-y-1 hover:bg-slate-700/80">
              <MdMail className="text-2xl" />
            </a>
          </div>
        </nav>
        <aside className="border-t border-slate-700 pt-5 text-center text-sm text-slate-400">
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Navneet Mishra</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
