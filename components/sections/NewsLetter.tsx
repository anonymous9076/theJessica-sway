import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-10 md:py-20 bg-white'>
      <div className='bg-white rounded-[2rem] md:rounded-[3rem] w-[92%] md:w-[85%] lg:w-[80%] overflow-hidden mx-auto shadow-2xl flex flex-col md:flex-row items-stretch border border-gray-100'>
        {/* Left Side: Image */}
        <div className='w-full md:w-[45%] h-[40vh] md:h-auto min-h-[350px] relative overflow-hidden'>
          <Image
            src={"https://i.pinimg.com/1200x/9e/a9/20/9ea920bc08a0936ba20e488485accdf4.jpg"}
            alt='newsletter'
            fill
            className='object-cover transition-transform duration-700 hover:scale-105'
          />
        </div>

        {/* Right Side: Content */}
        <div className='w-full md:w-[55%] p-10 md:h-[70dvh]  flex flex-col justify-center gap-6 bg-white'>
          <div className='space-y-3'>
            <h2 className='font-playfair text-3xl md:text-5xl font-medium tracking-tight text-black'>
              Newsletter
            </h2>
            <div className='h-1.5 w-16 bg-primary rounded-full'></div>
          </div>

          <p className='text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl text-center md:text-left'>
            Join hundreds of curious minds and get exclusive tips, insights, and inspiration straight to your inbox, no spam, just value.
          </p>

          <div className='flex flex-col  items-center  lg:flex-row gap-3 w-full max-w-lg mt-2'>
            <input
              type="email"
              placeholder="Your Email Address"
              className='flex-1 px-6 py-4 w-full rounded-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'
            />
            <button className='px-10 py-4 w-full lg:w-auto rounded-full bg-primary text-white font-semibold hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter