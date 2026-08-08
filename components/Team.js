'use client'

import Image from 'next/image'

export default function Team() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Lead Dentist',
      bio: 'With 15+ years of experience, Dr. Johnson specializes in restorative and cosmetic dentistry.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Orthodontist',
      bio: 'Specialized in orthodontic treatments and smile alignment with cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Periodontist',
      bio: 'Expert in gum health and periodontal disease treatment with compassionate care.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Ms. Lisa Thompson',
      title: 'Dental Hygienist',
      bio: 'Dedicated to patient education and preventive care for optimal oral health.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}