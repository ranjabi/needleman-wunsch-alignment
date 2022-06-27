import React from 'react'

const Navbar = ({ handleClick }) => {
  return (
    <div className='bg-slate-500 '>
      <ul className="container mx-auto flex justify-end py-2">
        <li>
          <button onClick={handleClick}>Documentation</button>
        </li>
        <li>
          <a href="https://github.com/ranjabi">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
