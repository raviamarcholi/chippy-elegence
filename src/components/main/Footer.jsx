import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#333333] text-white py-12 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div>
        <h3 className="text-xl font-bold mb-4">CHIPPY ELEGENCE</h3>
        <p className="text-gray-400 mb-4 secondary-font">
          Premium quality clothing for the modern individual.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-pinterest-p" />
          </a>
        </div>
      </div>
      {/* Column 2 */}
      <div>
        <h4 className="font-bold mb-4">Shop</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition secondary-font"
            >
              Men's Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition secondary-font"
            >
              Women's Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition secondary-font"
            >
              Children
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr className='text-orange-400 my-5'/>
    <div className='text-center'>© Ravi Amarcholi . All Rights Reserved -2025</div>
  </div>
</footer>

  )
}

export default Footer