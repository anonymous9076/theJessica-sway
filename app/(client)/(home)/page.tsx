import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import NewsLetter from '@/components/sections/NewsLetter'
import StatSection from '@/components/sections/StatSection'
import ServiceSection from '@/components/sections/ServiceSection'
import QuoteSection from '@/components/sections/QuoteSection'
import TestimonialSection from '@/components/sections/TestimonialSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />

      <QuoteSection />
      <StatSection />
      <TestimonialSection />
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default page