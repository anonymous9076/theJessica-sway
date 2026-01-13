import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { servicesData } from '@/data/services';

const ServiceSection = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Our Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium text-black font-playfair leading-tight">
                            Bespoke Services for <br />
                            <span className="italic text-gray-400">Your Unique Path</span>
                        </h2>
                    </div>
                   
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Link
                            href={`/services/${service.slug}`}
                            key={service.slug}
                            className="group relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Blur & Overlay */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-black/60" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end gap-4 text-white">
                                <h3 className="text-3xl md:text-4xl font-playfair font-medium leading-tight text-white">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 text-lg font-light line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    {service.description}
                                </p>

                                <div className="mt-4 flex items-center gap-3 text-primary font-medium tracking-wide group/btn">
                                    <span className="text-white uppercase text-sm tracking-[0.2em]">Read More</span>
                                    <div className="p-2 bg-primary rounded-full text-white transition-transform duration-300 group-hover/btn:translate-x-2">
                                        <MoveRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl group-hover:border-primary transition-colors duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;