import { useState } from 'react'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import Feature from './components/landing/Feature'
import FeaturedProducts from './components/landing/FeaturedProduct'
import Hero from './components/landing/Hero'
import Testimonials from './components/landing/Testimonials'
import Newsletter from './components/main/Newsletter'
import React from 'react'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
