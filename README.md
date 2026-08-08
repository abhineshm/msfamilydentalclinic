# MS Family Dental Clinic Website

A modern, responsive website for MS Family Dental Clinic built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional interface with smooth animations
- **SEO Optimized**: Built with Next.js for optimal SEO performance
- **Fast Performance**: Optimized for speed and performance
- **Accessible**: WCAG compliant for accessibility

## Sections

1. **Hero Section**: Eye-catching banner with call-to-action buttons
2. **Services**: Showcase of dental services offered
3. **Team**: Information about the dental professionals
4. **Testimonials**: Patient reviews and ratings
5. **Contact**: Contact form and clinic information
6. **Footer**: Quick links and social media

## Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhineshm/msfamilydentalclinic.git
cd msfamilydentalclinic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
msfamilydentalclinic/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section
│   ├── Services.js        # Services section
│   ├── Team.js            # Team section
│   ├── Testimonials.js    # Testimonials section
│   ├── Contact.js         # Contact section
│   └── Footer.js          # Footer
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## Customization

### Update Clinic Information

Edit `components/Contact.js` to update:
- Address
- Phone number
- Email
- Business hours

### Update Services

Edit `components/Services.js` to modify the services list and descriptions.

### Update Team Members

Edit `components/Team.js` to add or remove team members and update their information.

### Update Testimonials

Edit `components/Testimonials.js` to add or remove patient testimonials.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean
- Heroku

## Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',
      secondary: '#00b4d8',
    },
  },
}
```

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting for better performance
- CSS is minified and optimized
- Static generation where possible

## SEO

The website includes:
- Proper meta tags
- Open Graph tags
- Structured data ready
- Mobile-friendly design
- Fast loading times

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact: info@msfamilydental.com

---

**Last Updated**: 2024
