import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Header = ({open,togglenav,count}) => {

  

  return (
    <header className={open?'active':""}>
        <Link to="/" className="logo">Prime<span>Electricals</span></Link>


        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
        </ul>

        <ul>
          <Link to="/login"><i className="fa-sharp fa-solid fa-right-to-bracket"></i></Link>
          <Link to="/cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i><sup>{count}</sup></Link>
          <Link to="/"><i className="fa-solid fa-user"></i></Link>
        </ul>

        <div className="bars" onClick={togglenav}>
          <div className="bar"></div>
        </div>
    </header>
  )
}

export default Header;
