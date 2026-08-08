'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MS Family Dental
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#home" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#team" className="hover:text-blue-600 transition">
            Team
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <a href="tel:+1234567890" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            <Phone size={18} />
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#home" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="#services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#team" className="hover:text-blue-600 transition">
              Team
            </Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <a href="tel:+1234567890" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-fit">
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}