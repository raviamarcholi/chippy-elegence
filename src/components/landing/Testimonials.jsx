import React from 'react'

const Testimonials = () => {
  return (
<section className="py-16 px-4 bg-[#ffe0b3]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-4">
      What Our Customers Say
    </h2>
    <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto secondary-font">
      Don't just take our word for it - hear from our satisfied customers.
    </p>
    <div className="testimonial-carousel flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
      {/* Testimonial 1 */}
      <div className="testimonial-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md h-full">
          <div className="flex mb-4">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-6 secondary-font">
            "The quality of the t-shirts is exceptional. They're comfortable,
            durable, and the fit is perfect. I've already ordered more!"
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/43.jpg"
              alt="Sarah J."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Sarah J.</h4>
              <p className="text-gray-600 text-sm secondary-font">
                Verified Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="testimonial-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md h-full">
          <div className="flex mb-4">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-6 secondary-font">
            "I'm impressed with the attention to detail in every piece. The
            jeans fit perfectly and have become my go-to pair."
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael T."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Michael T.</h4>
              <p className="text-gray-600 text-sm secondary-font">
                Verified Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="testimonial-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md h-full">
          <div className="flex mb-4">
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star text-yellow-400" />
            <i className="fas fa-star-half-alt text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-6 secondary-font">
            "Fast shipping and excellent customer service. The blazer I ordered
            exceeded my expectations in terms of quality."
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Jennifer L."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Jennifer L.</h4>
              <p className="text-gray-600 text-sm secondary-font">
                Verified Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Testimonials