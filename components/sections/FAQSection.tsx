import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ items, title = "FAQ (Frequently Asked Questions)" }) => {
    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Common Queries</span>
                        <div className="h-[2px] w-12 bg-primary rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-black font-playfair leading-tight">
                        {title}
                    </h2>
                </div>

                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-100 rounded-2xl px-6 py-2 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
                            >
                                <AccordionTrigger className="text-left text-lg md:text-xl font-medium font-playfair hover:no-underline text-black hover:text-primary transition-colors py-4">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500 text-lg leading-relaxed font-inter pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

             
            </div>
        </section>
    );
};

export default FAQSection;
