import React from 'react'
import About from './About'
import Blogs from './Blogs'
import Contact from './Contact'
import Home from './Home'
import Products from './Products'
import Services from './Services'
import Testimonials from './Testimonials'

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