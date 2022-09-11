import React from 'react'
import About from '../components/About'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Products from '../components/Products'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Main = () => {
  return (
    <main>
        <Home />
        <About />
        <Services />
        <Products />
        <Blogs />
        <Testimonials />
        <Contact />
    </main>
  )
}

export default Main