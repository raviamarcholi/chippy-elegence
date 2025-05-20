import React from 'react'

const Newsletter = () => {
  return (
   <section className="py-16 px-4 bg-[#1a1a1a] text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
    <p className="text-gray-300 mb-8 max-w-2xl mx-auto secondary-font">
      Subscribe to our newsletter for exclusive offers, new arrivals, and style
      inspiration.
    </p>
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-grow px-4 py-3 rounded-full focus:outline-none text-[#1a1a1a]"
      />
      <button
        type="submit"
        className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-3 px-8 rounded-full transition duration-300"
      >
        Subscribe
      </button>
    </form>
    <p className="text-gray-400 text-sm mt-4 secondary-font">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</section>

  )
}

export default Newsletter