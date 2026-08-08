'use client'

import { Heart, Smile, Stethoscope, AlertCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: 'General Dentistry',
      description: 'Routine cleanings, checkups, and preventive care to maintain your dental health.',
    },
    {
      icon: <Smile className="w-12 h-12 text-blue-600" />,
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers to enhance your beautiful smile.',
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: 'Restorative Dentistry',
      description: 'Fillings, crowns, bridges, and implants to restore your teeth functionality.',
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-blue-600" />,
      title: 'Emergency Dental Care',
      description: 'Fast and effective treatment for dental emergencies and urgent dental issues.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}