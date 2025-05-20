import React from 'react'

const Feature = () => {
  return (
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Category 1 */}
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
          alt="Men's Collection"
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="#"
            className="bg-white text-[#1a1a1a] font-bold py-2 px-6 rounded-full"
          >
            Men's
          </a>
        </div>
      </div>
      {/* Category 2 */}
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Women's Collection"
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="#"
            className="bg-white text-[#1a1a1a] font-bold py-2 px-6 rounded-full"
          >
            Women's
          </a>
        </div>
      </div>
      {/* Category 3 */}
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Accessories"
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="#"
            className="bg-white text-[#1a1a1a] font-bold py-2 px-6 rounded-full"
          >
            Accessories
          </a>
        </div>
      </div>
      {/* Category 4 */}
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
          alt="New Arrivals"
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="#"
            className="bg-white text-[#1a1a1a] font-bold py-2 px-6 rounded-full"
          >
            New Arrivals
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Feature