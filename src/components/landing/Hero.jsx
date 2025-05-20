import React from 'react'

const Hero = () => {
  return (
  <section className="hero-bg text-white py-20 md:py-32 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Elevate Your Style
      </h1>
      <p className="text-xl md:text-2xl mb-8 secondary-font">
        Discover premium quality clothing that combines comfort with
        cutting-edge fashion.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Shop Now
        </a>
        <a
          href="#"
          className="border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Collections
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero