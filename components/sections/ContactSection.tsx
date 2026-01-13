"use client"
import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
    return (
        <section className='w-full py-10 md:py-20 bg-white'>
            <div className='bg-white rounded-[2rem] md:rounded-[3rem] w-[92%] md:w-[85%] lg:w-[80%] overflow-hidden mx-auto shadow-2xl flex flex-col md:flex-row items-stretch border border-gray-100'>
                {/* Left Side: Image */}
                <div className='w-full md:w-[45%] h-[40vh] md:h-auto min-h-[400px] relative overflow-hidden'>
                    <Image
                        src="https://i.pinimg.com/1200x/9e/a9/20/9ea920bc08a0936ba20e488485accdf4.jpg"
                        alt='Contact'
                        fill
                        className='object-cover transition-transform duration-700 hover:scale-105'
                    />
                </div>

                {/* Right Side: Form */}
                <div className='w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-8 bg-white'>
                    <div className='text-center space-y-2'>
                        <h1 className='font-playfair text-4xl md:text-5xl font-bold text-black'>
                            Get in Touch
                        </h1>
                        <p className='font-great-vibes text-3xl md:text-4xl text-primary'>
                            Got a question?
                        </p>
                    </div>

                    <div className='text-center space-y-1 mt-4'>
                        <h3 className='font-inter text-sm md:text-base font-medium tracking-[0.2em] text-gray-500 uppercase'>
                            I'd love to hear from you.
                        </h3>
                        <p className='font-inter text-sm md:text-base text-gray-600'>
                            Send me a message and I will respond as soon as possible.
                        </p>
                        <div className='mx-auto mt-4 h-0.5 w-12 bg-primary'></div>
                    </div>

                    <form className='space-y-4 mt-4'>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className='w-full px-6 py-4 rounded-md bg-white border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all'
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className='w-full px-6 py-4 rounded-md bg-white border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all'
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className='w-full px-6 py-4 rounded-md bg-white border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all'
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Tell me about the purpose of your message"
                                rows={4}
                                className='w-full px-6 py-4 rounded-md bg-white border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none'
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className='w-full py-4 mt-2 bg-primary text-white font-medium tracking-wide hover:bg-black transition-all duration-300'
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
