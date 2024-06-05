import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#95AD63]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Le Doux &nbsp;
            <span className='sm:block hidden'>| Pastry & Coffee</span>
          </p>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* For each Link component in navLinks, 
          render a list item with a link to the corresponding id */}
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${active === Link.title ? 'text-[#FFC0ED]' : 'text-secondary'}
             hover:text-[#FFC0ED] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-8 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {/* For each Link component in navLinks, 
          render a list item with a link to the corresponding id */}
              {navLinks.map((Link) => (
                <li key={Link.id}
                  className={`${active === Link.title ? 'text-white' : 'text-secondary'}
             font-poppins font-medium cursor-pointer text-[20px]`}
                  onClick={() => {
                    setToggle(!toggle) // Automatically close the menu when a link is clicked
                    setActive(Link.title)
                  }
                  }>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar