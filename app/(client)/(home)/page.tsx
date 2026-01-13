import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import NewsLetter from '@/components/sections/NewsLetter'
import StatSection from '@/components/sections/StatSection'
import ServiceSection from '@/components/sections/ServiceSection'
import QuoteSection from '@/components/sections/QuoteSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import FAQSection from '@/components/sections/FAQSection'
import { faqsData } from '@/data/faqs'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />

      <QuoteSection />
      <StatSection />
      <FAQSection items={faqsData} />
      <TestimonialSection />
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default page