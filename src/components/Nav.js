import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
     <nav className="navigation flex flex-row justify-between p-5">
    <div className=" md:text-2xl">Pratik's portfolio</div>
    <div>
    <ul className="non-bullet">
      <li className="inline"><Link className="link link-active" to="/">Home</Link></li>
      <li className="inline"><Link className="link" to="/project">Project</Link></li>
      
    </ul>
    </div>
  </nav>
    </>
  )
}

export default Nav