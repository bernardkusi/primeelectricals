import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [open,setopen]=useState(false);

  return (
    <header className={open && 'active'}>
        <Link to="/" className="logo">Prime<span>Electricals</span></Link>


        <ul>
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
            <Link to="/">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
        </ul>

        <ul>
          <Link to="/login"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></Link>
          <Link to="/"><i class="fa-sharp fa-solid fa-cart-shopping"></i></Link>
          <Link to="/"><i class="fa-solid fa-user"></i></Link>
        </ul>

        <div className="bars" onClick={()=>setopen(!open)}>
          <div className="bar"></div>
        </div>
    </header>
  )
}

export default Header;
