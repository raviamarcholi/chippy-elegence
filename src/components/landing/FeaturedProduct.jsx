import React from 'react'

const FeaturedProducts = () => {
  return (
   <section className="py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto secondary-font">
      Handpicked selection of premium quality products designed for comfort and
      style.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Premium T-Shirt"
            className="w-full h-80 object-cover"
          />
          <div className="product-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition duration-300 transform translate-y-4">
            <button className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-2 px-6 rounded-full mr-2 transition">
              Quick View
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold py-2 px-6 rounded-full transition">
              Add to Cart
            </button>
          </div>
          <span className="absolute top-4 left-4 bg-[#ff8800] text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">Premium Cotton T-Shirt</h3>
          <div className="flex mb-2">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star-half-alt text-yellow-400" />
            <span className="text-gray-600 text-sm ml-2">(24)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$29.99</span>
            <span className="text-gray-500 line-through text-sm">$39.99</span>
          </div>
        </div>
      </div>
      {/* Product 2 */}
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
            alt="Slim Fit Jeans"
            className="w-full h-80 object-cover"
          />
          <div className="product-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition duration-300 transform translate-y-4">
            <button className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-2 px-6 rounded-full mr-2 transition">
              Quick View
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold py-2 px-6 rounded-full transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">Slim Fit Denim Jeans</h3>
          <div className="flex mb-2">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="far fa-star text-yellow-400" />
            <span className="text-gray-600 text-sm ml-2">(18)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$59.99</span>
          </div>
        </div>
      </div>
      {/* Product 3 */}
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Casual Blazer"
            className="w-full h-80 object-cover"
          />
          <div className="product-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition duration-300 transform translate-y-4">
            <button className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-2 px-6 rounded-full mr-2 transition">
              Quick View
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold py-2 px-6 rounded-full transition">
              Add to Cart
            </button>
          </div>
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">Casual Fit Blazer</h3>
          <div className="flex mb-2">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <span className="text-gray-600 text-sm ml-2">(32)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$89.99</span>
            <span className="text-gray-500 line-through text-sm">$129.99</span>
          </div>
        </div>
      </div>
      {/* Product 4 */}
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595341595379-cf2df1c6a0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Leather Wallet"
            className="w-full h-80 object-cover"
          />
          <div className="product-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition duration-300 transform translate-y-4">
            <button className="bg-[#ff8800] hover:bg-[#ff9900] text-white font-bold py-2 px-6 rounded-full mr-2 transition">
              Quick View
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold py-2 px-6 rounded-full transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">Genuine Leather Wallet</h3>
          <div className="flex mb-2">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="far fa-star text-yellow-400" />
            <span className="text-gray-600 text-sm ml-2">(14)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$34.99</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-12">
      <a
        href="#"
        className="inline-block border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
      >
        View All Products
      </a>
    </div>
  </div>
</section>

  )
}

export default FeaturedProducts