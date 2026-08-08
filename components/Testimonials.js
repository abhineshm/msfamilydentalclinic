'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Davis',
      role: 'Patient',
      content: 'MS Family Dental Clinic provided exceptional care. The dentists are highly skilled and the staff is incredibly friendly. I felt comfortable throughout my treatment.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Patient',
      content: 'I was nervous about my dental procedure, but the team made me feel at ease. The clinic is modern and clean. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Robert Smith',
      role: 'Patient',
      content: 'Great experience from start to finish. The dentist explained everything clearly and took time to answer all my questions. Very professional.',
      rating: 5,
    },
    {
      name: 'Jennifer Lee',
      role: 'Patient',
      content: 'Best dental clinic I have visited. The pain-free treatments and excellent customer service are unmatched. Definitely coming back!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}