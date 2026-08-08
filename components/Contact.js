'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Dental Street<br />
                  Medical Plaza Building<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <a href="tel:+12125551234" className="text-gray-600 hover:text-blue-600">
                  +1 (212) 555-1234
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <a href="mailto:info@msfamilydental.com" className="text-gray-600 hover:text-blue-600">
                  info@msfamilydental.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
