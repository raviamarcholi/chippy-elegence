import React from 'react'

const Feature = () => {
  return (
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Category 1 */}
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c41bf032971148e7102d49c/5b30f718-f41b-4b58-ab22-927d8568ac7a/well-dressed-men.gif"
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
          src="https://www.irealife.com/cdn/shop/articles/Styling_Tips_for_Office_wear_for_Women.png?v=1745562260"
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
          src="https://www.organicandmore.com/wp-content/uploads/2023/11/group-children-studio-concept_155003-6536.jpg"
          alt="Accessories"
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="#"
            className="bg-white text-[#1a1a1a] font-bold py-2 px-6 rounded-full"
          >
            Children
          </a>
        </div>
      </div>
      {/* Category 4 */}

    </div>
  </div>
</section>

  )
}

export default Feature