import React from 'react'

function About() {
  return (
    <div className="mt-12 space-y-6">
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-xl shadow-cyan-950/20">
        <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text">About</h1>
        <p className="mt-3 text-base leading-7 text-slate-300">
       I am a Computer Science Engineering graduate specialized in Data Science and Artificial Intelligence, driven by a passion for building smart, data-driven systems and turning complex concepts into intuitive visual experiences. My background sits uniquely at the intersection of technical engineering and creative problem solving allowing me to build end-to-end digital solutions that perform as flawlessly as they look.

        </p>
      </div>

      <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 p-6 shadow-xl shadow-blue-950/20">
        <h1 className="text-xl font-semibold text-blue-300">Education</h1>
        <div className="mt-4 space-y-4 text-slate-200">
         
          <div>
            <h2 className="font-semibold text-white">Bachelor of Technology</h2>
            <p>Shri Ramswaroop Memorial University, Lucknow</p>
            <p>B.Tech in Computer Science and Engineering with Specialization in Data Science and Artificial Intelligence.</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/30 via-slate-900 to-slate-950 p-6 shadow-xl shadow-violet-950/20">
        <h1 className="text-xl font-semibold text-violet-300">Skill & Expertise</h1>
        <p className="mt-3 text-slate-300 leading-7">
          I work across data analysis, AI, web development, and design. My skill set includes Python, C, HTML, CSS, JavaScript, MySQL, IBM Cognos, SPSS Modeler, Canva, Figma, and project management tools. I enjoy translating complex problems into intuitive experiences backed by analytical thinking.
        </p>
      </div>

      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 p-6 shadow-xl shadow-emerald-950/20">
        <h1 className="text-xl font-semibold text-emerald-300">Professional Experience</h1>
        <p className="mt-3 text-slate-300 leading-7">
          <h3 className='font-bold'>Data Science & Machine Learning: </h3>
           Developed robust models for data analysis, predictive modeling, and statistical insights. Experienced in handling end-to-end data pipelines, data visualization, and algorithm development using Python, Java, and C.
 <h3 className='font-bold'>Brand Identity & Graphic Design:</h3>
  Completed hands-on design industry experience, crafting visual assets, brand identities, and vector graphics. Key projects include designing the corporate identity and symmetrical minimalist logo for Convergent (a trading firm) and producing end-to-end digital media graphics using Figma, Photoshop, and Canva.
  
<h3 className='font-bold'> Web Development & Freelance Platforms: </h3> Designed and structured full-fledged web application frameworks, including building project structures and frontend architectures for platforms like "WEBTRI" using modern frameworks like Bootstrap.
        </p>
      </div>

      <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950 p-6 shadow-xl shadow-amber-950/20">
        <h1 className="text-xl font-semibold text-amber-300">Achievements & Awards</h1>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>• Graphics Designing - IQusity</li>
          <li>• Design Thinking - TCS</li>
          <li>• Predictive Analytics - IBM</li>
          <li>• Data Science - IBM</li>
          <li>• Responsive Web Design - L&T Edutech</li>
          <li>• Python Pro - L&T Edutech</li>
        </ul>
      </div>

      <hr className="mt-12 border-slate-700" />
    </div>
  )
}

export default About
