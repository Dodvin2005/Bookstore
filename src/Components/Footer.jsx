import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              BOOKSTORE
            </h2>

            <p className="text-gray-400 mt-3 text-sm leading-6">
              Your trusted online shopping Store. 
              Find the best books at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>
              <li className="hover:text-white cursor-pointer">
                Products
              </li>
              <li className="hover:text-white cursor-pointer">
                Wishlist
              </li>
              <li className="hover:text-white cursor-pointer">
                Cart
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400 text-sm mb-2">
              📧 bookstore@gmail.com
            </p>

            <p className="text-gray-400 text-sm mb-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400 text-sm">
              📍 Kochi, Kerala, India
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-300 text-sm">
            © 2026 BOOKSTORE. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer