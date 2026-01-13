import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-[60vh] md:min-h-[80vh]">
      {/* Right Side: Text Content (Stacks above image on mobile) */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 px-6 md:px-12 py-10 md:py-0 text-center md:text-left items-center md:items-start justify-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-normal text-black leading-tight md:leading-tighter">
          Your Roadmap to a Clearer Career
        </h1>
        <p className="font-great-vibes text-4xl lg:text-5xl text-primary mt-2">
          Mindset. Mentorship. Momentum.
        </p>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[83vh] relative overflow-hidden">
        <Image
          src="/Images/hero.jpeg"
          alt="Hero Image"
          fill
          className="object-bottom object-cover rounded-t-3xl md:rounded-t-none md:rounded-l-full"
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection