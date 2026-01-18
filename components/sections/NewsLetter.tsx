"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast'
import emailjs from 'emailjs-com'

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Save to Firebase
      try {
        await addDoc(collection(db, 'newsletterSubscribers'), {
          email: email,
          timestamp: serverTimestamp()
        });
      } catch (fbError: any) {
        console.error('Firebase Error:', fbError);
        throw new Error('Database Error: Please check your Firestore rules.');
      }

      // 2. Send Email via EmailJS
      try {
        const templateParams = {
          email: email,
          to_name: 'Jessica',
          reply_to: email,
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      } catch (ejError: any) {
        console.error('EmailJS Error:', ejError);
        // Optional: If Firebase succeeded but EmailJS failed, we could still treat it as a partial success
        // throw new Error('Email Error: Please check your EmailJS template.');
      }

      toast.success('Thank you for subscribing!');
      setEmail('');
    } catch (error: any) {
      console.error('Subscription Error:', error);
      toast.error(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className='font-playfair text-3xl md:text-5xl font-medium tracking-tight text-black text-center md:text-left'>
              Newsletter
            </h2>
            <div className='h-1.5 w-16 bg-primary rounded-full mx-auto md:ml-0'></div>
          </div>

          <p className='text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl text-center md:text-left'>
            Join hundreds of curious minds and get exclusive tips, insights, and inspiration straight to your inbox, no spam, just value.
          </p>

          <form onSubmit={handleSubmit} className='flex flex-col  items-center  lg:flex-row gap-3 w-full max-w-lg mt-2'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
              className='flex-1 px-6 py-4 w-full rounded-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 py-4 w-full lg:w-auto rounded-full bg-primary text-white font-semibold hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
