import React, { useState } from 'react'

const Header = () => {

  const [open,setopen]=useState(false);

  return (
    <header className={open && 'active'}>
        <a href="#" className="logo">Prime<span>Electricals</span></a>


        <ul>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#">Services</a>
            <a href="#products">Products</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </ul>

        <div className="bars" onClick={()=>setopen(!open)}>
          <div className="bar"></div>
        </div>
    </header>
  )
}

export default Header;
