'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">MS Family Dental</h3>
            <p className="text-gray-400">
              Your trusted partner for comprehensive dental care and a beautiful smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#team" className="hover:text-white transition">Team</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+12125551234" className="hover:text-white transition">+1 (212) 555-1234</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@msfamilydental.com" className="hover:text-white transition">info@msfamilydental.com</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Dental Street, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MS Family Dental Clinic. All rights reserved. | <Link href="#" className="hover:text-white">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  )
}