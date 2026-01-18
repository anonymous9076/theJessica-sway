import React from 'react';
import Image from 'next/image';
import TestimonialSection from '@/components/sections/TestimonialSection';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* About Hero Section - Original Layout Restored */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Image Column (Original) */}
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

                        {/* Content Column (Original) */}
                        <div className="lg:col-span-7 pt-4">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Meet the Person</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-medium text-black font-playfair leading-tight mb-10">
                                Who is <span className=" font-great-vibes text-primary">Jessica ?</span>
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


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Centered Quote Section - Retained New Design */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="relative p-10 md:p-14 bg-gray-50 rounded-[3rem] overflow-hidden group shadow-sm border border-gray-100">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                        <span className="text-8xl font-serif text-primary/10 absolute top-4 left-4 select-none">&ldquo;</span>
                        <p className="relative z-10 italic font-playfair text-black/50 text-2xl md:text-3xl leading-relaxed">
                            A certified counsellor with 3+ years of experience, Jessica has mentored students globally across India, Australia, and the UK, supporting them with communication skills, career clarity, confidence building, and global education choices.
                        </p>
                        <span className="text-8xl font-serif text-primary/10 absolute  right-6 select-none">&rdquo;</span>
                    </div>
                </div>
            </section>

            {/* Side-by-Side Pinterest Section - Retained New Design */}
            <section className="pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                        {/* Left Column - Practical Approach */}
                        <div className="lg:col-span-7 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-playfair text-black">A Passion for Clarity</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-inter">
                                <p className="font-medium text-black border-l-4 border-primary pl-6 py-2">
                                    "I believe every student deserves a clear path to their dreams, unburdened by confusion or societal pressure."
                                </p>
                                <p>
                                    Her approach is practical, empathetic, and deeply personalized because no two journeys are the same. Today, Jessica works with students and families worldwide, guiding them to speak confidently, choose wisely, and step into their future with belief and direction.
                                </p>
                            </div>
                            <div className="pt-8 flex flex-wrap gap-8 items-center text-black font-medium border-t border-gray-100 mt-8">
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

                        {/* Right Column - Pinterest Image */}
                        <div className="lg:col-span-5 relative group">
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-4/5 bg-gray-100">
                                <Image
                                    src="https://i.pinimg.com/1200x/ef/ec/69/efec69f736a283d913c18b72035e842a.jpg"
                                    alt="Jessica Kashyap - Professional Portrait"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            {/* Decorative Background Accents */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse"></div>

                            {/* Accent Frame */}
                            <div className="absolute -inset-4 border border-primary/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
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
