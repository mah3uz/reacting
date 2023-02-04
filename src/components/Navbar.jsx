import React from "react"
import reactLogo from "../assets/react.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-amber-300 shadow text-gray-800">
      <div className="flex">
        <img src={reactLogo} alt="React Logo" className="logo react" />
        <span className="mx-2 font-black text-2xl">+</span>
        <img src="/vite.svg" alt="React Logo" className="logo" />
      </div>
      <h1 className="text-4xl">Reacting</h1>
      <ul className="flex gap-4">
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
