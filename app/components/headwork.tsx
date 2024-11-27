import React from 'react'
export default function Headwork() {
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">My Blog</a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:underline">
              Home
            </a>
      
          </nav>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            id="menu-button"
          >
            ☰
          </button>
        </div>
      </header>
    );
  }
  