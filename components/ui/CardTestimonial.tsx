import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface CardTestimonialProps {
    content: string;
    name: string;
    role?: string;
    image?: string;
}

const CardTestimonial: React.FC<CardTestimonialProps> = ({ content, name, role, image }) => {
    return (
        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col gap-6 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 group h-full">
            {/* Quote Icon Header */}
            <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Quote className="w-6 h-6 fill-current" />
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-600 text-lg leading-relaxed font-light italic grow">
                &ldquo;{content}&rdquo;
            </p>

            {/* Author Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                {image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="flex flex-col">
                    <h4 className="text-black font-semibold font-playfair tracking-wide leading-tight">
                        {name}
                    </h4>
                    {role && (
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                            {role}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardTestimonial;