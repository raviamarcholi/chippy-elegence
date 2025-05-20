import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-[#ff8800]">CHIPPY</span>
                        <span className="text-2xl font-bold text-[#1a1a1a]">ELEGENCE</span>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] font-medium transition"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] font-medium transition"
                        >
                            Shop
                        </a>
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] font-medium transition"
                        >
                            Collections
                        </a>
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] font-medium transition"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] font-medium transition"
                        >
                            Contact
                        </a>
                    </div>
                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-[#1a1a1a] hover:text-[#ff8800] transition">
                            <i className="fas fa-search" />
                        </a>
                        <a href="#" className="text-[#1a1a1a] hover:text-[#ff8800] transition">
                            <i className="fas fa-user" />
                        </a>
                        <a
                            href="#"
                            className="text-[#1a1a1a] hover:text-[#ff8800] transition relative"
                        >
                            <i className="fas fa-shopping-bag" />
                            <span className="absolute -top-2 -right-2 bg-[#ff8800] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-[#1a1a1a] hover:text-[#ff8800] focus:outline-none"
                            id="mobile-menu-button"
                        >
                            <i className="fas fa-bars text-xl" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden hidden bg-white" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-[#1a1a1a] hover:text-[#ff8800] hover:bg-[#ffe0b3]"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-[#1a1a1a] hover:text-[#ff8800] hover:bg-[#ffe0b3]"
                    >
                        Shop
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-[#1a1a1a] hover:text-[#ff8800] hover:bg-[#ffe0b3]"
                    >
                        Collections
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-[#1a1a1a] hover:text-[#ff8800] hover:bg-[#ffe0b3]"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-[#1a1a1a] hover:text-[#ff8800] hover:bg-[#ffe0b3]"
                    >
                        Contact
                    </a>
                    <div className="flex space-x-4 px-3 py-2">
                        <a href="#" className="text-[#1a1a1a] hover:text-[#ff8800]">
                            <i className="fas fa-search" />
                        </a>
                        <a href="#" className="text-[#1a1a1a] hover:text-[#ff8800]">
                            <i className="fas fa-user" />
                        </a>
                        <a href="#" className="text-[#1a1a1a] hover:text-[#ff8800] relative">
                            <i className="fas fa-shopping-bag" />
                            <span className="absolute -top-2 -right-2 bg-[#ff8800] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar