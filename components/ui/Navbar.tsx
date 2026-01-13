"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const services = [
        "Career Guidance",
        "Public Speaking",
        "Academic Counselling",
        "Global Education",
        "Astrology Guidance"
    ];

    return (
        <nav className='bg-white w-full sticky top-0 z-50 border-b border-gray-100'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-20'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <Link href='/'>
                        <Image
                            src='/Images/logo.png'
                            alt='logo'
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-8 items-center text-foreground font-medium'>
                    <Link href='/' className="hover:text-primary transition-colors font-medium">Home</Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer">
                                Services <ChevronDown className="w-4 h-4" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[220px] p-2 bg-white shadow-xl rounded-xl border border-gray-100">
                            {services.map((service) => (
                                <DropdownMenuItem key={service} className="cursor-pointer hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary rounded-lg py-2 transition-colors">
                                    {service}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href='/about' className="hover:text-primary transition-colors">About</Link>
                    <Link href='/contact' className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center pr-4'>
                    <button
                        onClick={toggleMenu}
                        className='text-black p-2 hover:bg-gray-100 rounded-lg transition-colors overflow-hidden'
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
                <div className='flex flex-col p-6 gap-4'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-black hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Services in Mobile Menu */}
                    <div className='py-2'>
                        <span className='text-sm font-semibold text-black uppercase tracking-wider mb-3 block'>Our Services</span>
                        <div className='grid grid-cols-1 gap-3 pl-2'>
                            {services.map((service) => (
                                <Link
                                    key={service}
                                    href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    {service}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href='/contact'
                        onClick={() => setIsOpen(false)}
                        className='mt-4 bg-primary text-white text-center py-4 rounded-2xl font-semibold shadow-lg shadow-primary/20 transition-transform active:scale-95'
                    >
                        Book a Session
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;