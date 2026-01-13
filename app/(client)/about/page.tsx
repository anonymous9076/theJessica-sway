import React from 'react';
import Image from 'next/image';
import TestimonialSection from '@/components/sections/TestimonialSection';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* About Hero Section */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-4/5 md:aspect-auto">
                                <Image
                                    src="/Images/public-speaking.jpg"
                                    alt="Jessica Kashyap - Communication Trainer & Counsellor"
                                    width={600}
                                    height={800}
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 pt-4">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Meet the Person</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-medium text-black font-playfair leading-tight mb-10">
                                Who is <span className="italic text-gray-400">Jessica?</span>
                            </h1>

                            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-inter">
                                <p className="font-medium text-black">
                                    Jessica Kashyap is a communication trainer, counsellor, educator, mentor, and global education expert dedicated to helping students choose the right career path with clarity and confidence.
                                </p>

                                <p>
                                    Her mission is simple yet powerful: to help young people discover their true potential early in life and make informed career decisions without confusion, pressure, or fear.
                                </p>

                                <p>
                                    Growing up, Jessica saw many talented students settle into careers they didn’t love, not because they lacked ability, but because they lacked guidance. That experience shaped her purpose to become the mentor she once needed.
                                </p>

                                <div className="p-8 bg-gray-50 rounded-3xl border-l-4 border-primary">
                                    <p className="italic font-playfair text-black text-xl md:text-2xl">
                                        &ldquo;A certified counsellor with 3+ years of experience, Jessica has mentored students globally across India, Australia, and the UK, supporting them with communication skills, career clarity, confidence building, and global education choices.&rdquo;
                                    </p>
                                </div>

                                <p>
                                    Her approach is practical, empathetic, and deeply personalized because no two journeys are the same. Today, Jessica works with students and families worldwide, guiding them to speak confidently, choose wisely, and step into their future with belief and direction.
                                </p>

                                <div className="pt-8 pt flex flex-wrap gap-8 items-center text-black font-medium">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-playfair text-primary">3+</span>
                                        <span className="text-sm uppercase tracking-widest text-gray-400">Years Experience</span>
                                    </div>
                                    <div className="h-12 w-px bg-gray-200"></div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-playfair text-primary">Global</span>
                                        <span className="text-sm uppercase tracking-widest text-gray-400">Mentorship Reach</span>
                                    </div>
                                    <div className="h-12 w-px bg-gray-200"></div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-playfair text-primary">100%</span>
                                        <span className="text-sm uppercase tracking-widest text-gray-400">Personalized</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialSection />
        </main>
    );
};

export default AboutPage;
