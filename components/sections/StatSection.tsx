"use client"
import React from 'react';
import { Users, School, Heart, FileText, Globe } from 'lucide-react';

const StatSection = () => {
    const stats = [
        {
            number: '500+',
            label: 'Students Mentored',
            icon: <Users className="w-8 h-8" />,
            delay: '0s'
        },
        {
            number: '10+',
            label: 'Workshops Conducted',
            icon: <School className="w-8 h-8" />,
            delay: '0.1s'
        },
        {
            number: '90%+',
            label: 'Positive Feedback',
            icon: <Heart className="w-8 h-8" />,
            delay: '0.2s'
        },
        {
            number: '100+',
            label: 'Study Plans Created',
            icon: <FileText className="w-8 h-8" />,
            delay: '0.3s'
        },
        {
            number: '5',
            label: 'Countries Reached',
            icon: <Globe className="w-8 h-8" />,
            delay: '0.4s'
        },
    ];

    return (
        <section className="relative w-full py-24 md:py-40 bg-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Editorial Heading Section */}
                <div className="max-w-4xl mb-24 md:mb-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Our Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-black font-playfair leading-[1.1] mb-4">
                        I focus on your potential,
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-medium text-gray-400 font-playfair italic leading-[1.1] opacity-70 filter blur-[0.4px]">
                        you focus on your goals.
                    </h2>
                </div>

                {/* Stats Grid - Premium Floating Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:scale-[1.03] hover:border-primary/20 flex flex-col items-start gap-6 overflow-hidden"
                            style={{
                                animation: `cardPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${stat.delay}`,
                            }}
                        >
                            {/* Decorative Card Background Gradient */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/[0.02] to-transparent  transition-opacity duration-500 pointer-events-none" />

                            <div className="p-4 bg-primary/5 rounded-2xl text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                                {stat.icon}
                            </div>

                            <div className="space-y-1">
                                <div className="text-4xl md:text-5xl font-semibold text-black font-playfair transition-colors duration-500 group-hover:text-primary">
                                    {stat.number}
                                </div>
                                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider leading-tight">
                                    {stat.label}
                                </div>
                            </div>

                            {/* Subtle Progress Bar Decoration */}
                            <div className="absolute bottom-0 left-0 h-1 bg-primary/10 w-full">
                                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes cardPop {
          0% {
            opacity: 1;
            transform: scale(0.9) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default StatSection;