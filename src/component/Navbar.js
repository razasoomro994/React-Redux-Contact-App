import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
        {/* <h1>
        React-Redux-Contact-App 
        </h1> */}
<Link to='/add' className='navbar-brand p-2'> React-Redux-Contact-App </Link>
    
   </nav>
  )
}

export default Navbar
