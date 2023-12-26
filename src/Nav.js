import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
       <ul className='nav-ul'>
        <li><Link to='/'>product</Link></li>
        <li><Link to='/add'> Add product</Link></li>
        <li><Link to='/update'>update product</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
        <li><Link to='/profile'>profile</Link></li>
       </ul>
      
    </div>
  )
}

export default Nav
