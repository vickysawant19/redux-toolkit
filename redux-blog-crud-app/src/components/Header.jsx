import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    
        <header>
          <div className='w-full bg-blue-400 flex items-center justify-between '>
            <NavLink 
            className={"bg-blue-200 p-2 rounded m-2 hover:text-white hover:bg-blue-800"}
            to={"showpost"}> All Posts </NavLink>
            <NavLink 
            className={"bg-blue-200 p-2 rounded m-2 hover:text-white hover:bg-blue-800"}
            to={"addpost"}> Add Post </NavLink>

          </div>
        </header>

    
  )
}

export default Header