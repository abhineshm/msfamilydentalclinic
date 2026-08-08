import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to MS Family Dental Clinic
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Experience exceptional dental care in a welcoming environment. Our team of experienced dentists is dedicated to providing you and your family with the highest quality dental services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="btn btn-primary inline-flex items-center justify-center gap-2">
              Explore Our Services
              <ArrowRight size={20} />
            </Link>
            <a href="tel:+1234567890" className="btn btn-secondary inline-flex items-center justify-center gap-2">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}