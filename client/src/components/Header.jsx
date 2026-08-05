import React from 'react'

function Header() {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/85 px-4 shadow-lg shadow-cyan-950/20 backdrop-blur-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold tracking-wide text-cyan-300 hover:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 text-sm font-black text-slate-950">
            N
          </span>
          <span className="ml-3">Navneet Mishra</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <a href="#home" className="transition hover:text-cyan-300">Home</a>
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#portfolio" className="transition hover:text-cyan-300">Portfolio</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </nav>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost border border-cyan-500/30 bg-slate-900/80 px-4 text-sm font-semibold text-cyan-300 hover:border-cyan-300 hover:text-white">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box border border-cyan-500/20 bg-slate-900 p-2 text-slate-100 shadow-xl shadow-cyan-950/30"
          >
            <li>
              <a className="justify-between hover:bg-slate-800">
                Profile
                <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li><a className="hover:bg-slate-800">Settings</a></li>
            <li><a className="hover:bg-slate-800">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
