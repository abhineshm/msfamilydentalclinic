import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MS Family Dental Clinic - Your Trusted Dental Care Provider',
  description: 'Professional dental services including general dentistry, cosmetic dentistry, and more. Visit our clinic for expert dental care.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}