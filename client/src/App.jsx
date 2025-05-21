import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"


function App() {
  return (
    <>
      <div>
        <Header/>
        <div className="md:p-10 p-5 md:ml-21 ml-4 md:mr-21 mr-4">
        <Home/>
        <Footer/>
        </div>

      </div>
    </>
  )
}

export default App
