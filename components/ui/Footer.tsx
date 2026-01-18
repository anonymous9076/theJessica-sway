import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const services = [
    { name: 'Career Guidance', href: '/services/career-guidance' },
    { name: 'Public Speaking', href: '/services/public-speaking' },
    { name: 'Academic Counselling', href: '/services/academic-counselling' },
    { name: 'Global Education', href: '/services/global-education' },
    { name: 'Astrology Guidance', href: '/services/astrology-guidance' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-white pt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-16">
          {/* Left Side: Branding */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <Link href="/">
              <Image
                src="/Images/logo.png"
                alt="logo"
                width={150}
                height={100}
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Empowering your journey with expert guidance, mentorship, and clarity for a successful career and life.
            </p>
          </div>

          {/* Right Side: Link Columns */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:gap-32">
            {/* Services Column */}
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-black">
                Services
              </h3>
              <ul className="flex flex-col gap-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-500 hover:text-primary transition-colors text-lg font-light"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-6">
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-black">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-primary transition-colors text-lg font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="py-8 border-t border-gray-100 flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm md:text-base font-light text-center">
            © {new Date().getFullYear()} Consultant Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;