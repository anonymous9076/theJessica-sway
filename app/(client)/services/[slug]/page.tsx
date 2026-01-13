import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/sections/FAQSection';
import fs from 'fs';
import path from 'path';

interface ServiceData {
    title: string;
    image: string;
    tagline: string;
    description: string;
    workWithMe: string;
    faqs: { title: string; content: string }[];
}

async function getServiceData(slug: string): Promise<ServiceData | null> {
    const filePath = path.join(process.cwd(), 'data', 'services', `${slug}.json`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading or parsing service data for slug: ${slug}`, error);
        return null;
    }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
    const { slug } =await params;
    const data = await getServiceData(slug);

    console.log(slug,data)

    if (!data) {
        notFound();
    }

    // Map FAQs to the format expected by FAQSection
    const faqItems = data.faqs.map(faq => ({
        question: faq.title,
        answer: faq.content
    }));

    return (
        <main className="min-h-screen bg-white">
            {/* Service Detail Section */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-12 xl:col-span-5 relative">
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-video lg:aspect-4/5">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={800}
                                    height={1000}
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-12 xl:col-span-7 pt-4">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Services</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-medium text-black font-playfair leading-tight mb-6">
                                {data.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-primary font-medium font-playfair italic mb-10">
                                {data.tagline}
                            </p>

                            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-inter">
                                <p className="font-medium text-black">
                                    {data.description}
                                </p>

                                <div className="p-8 bg-gray-50 rounded-3xl border-l-4 border-primary">
                                    <h3 className="text-xl font-medium text-black font-playfair mb-4 italic">How We Can Work Together</h3>
                                    <p className="font-inter text-gray-600">
                                        {data.workWithMe}
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <button className="bg-primary text-white px-10 py-5 rounded-2xl font-semibold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95">
                                        Book a Discovery Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service FAQ Section */}
            <FAQSection items={faqItems} title={`FAQs for ${data.title}`} />
        </main>
    );
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
    const servicesDir = path.join(process.cwd(), 'data', 'services');
    const filenames = fs.readdirSync(servicesDir);

    return filenames.map((filename) => ({
        slug: filename.replace('.json', ''),
    }));
}
