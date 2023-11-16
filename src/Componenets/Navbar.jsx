import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../Routes/AppRoutes'

const Navbar = () => {
    const currentUser = useContext(UserContext);
  return (
    <div style={{display:"flex",gap:12,padding:8,backgroundColor:'rgb(110,110,210)',borderBottom:"1px solid red",color:'white',marginBottom: 8}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/admin'}>admin</Link>
      <Link to={'/user'}>user</Link>
      <div>
      hi {currentUser}
      </div>
    </div>
  )
}

export default Navbar
