import ContactSection from '@/components/sections/ContactSection'
import React from 'react'

export const metadata = {
    title: 'Contact - The Jessica\'s Way',
    description: 'Get in touch with Jessica for personalized guidance and coaching.',
}

const ContactPage = () => {
    return (
        <main className="min-h-screen">
            <ContactSection />
        </main>
    )
}

export default ContactPage
