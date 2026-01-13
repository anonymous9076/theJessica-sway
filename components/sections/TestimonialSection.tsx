"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import CardTestimonial from '@/components/ui/CardTestimonial';
import { testimonialsData } from '@/data/testimonials';

const TestimonialSection = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Kind Words</span>
                        <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-black font-playfair leading-tight">
                        What People <span className="italic text-gray-400">Say About Me</span>
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <div className="testimonial-swiper-container">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        speed={1200}
                        grabCursor={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 60,
                            },
                        }}
                        className="pb-20"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index} className="transition-all duration-700 py-12">
                                {({ isActive }) => (
                                    <div
                                        className={`h-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] transform ${isActive
                                            ? 'scale-110 opacity-100 z-10'
                                            : 'scale-90 opacity-40'
                                            }`}
                                    >
                                        <CardTestimonial
                                            content={testimonial.content}
                                            name={testimonial.name}
                                            role={testimonial.role}
                                            image={testimonial.image}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .testimonial-swiper-container .swiper-pagination-bullet {
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.5s ease;
                }
                .testimonial-swiper-container .swiper-pagination-bullet-active {
                    background: var(--color-primary, #000) !important;
                    width: 24px;
                    border-radius: 4px;
                }
                .testimonial-swiper-container .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    will-change: transform, opacity;
                }
            `}</style>
        </section>
    );
};

export default TestimonialSection;