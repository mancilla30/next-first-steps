import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Contact Page',
    description:'SEO description for Contact Page',
    keywords: ['contact Page', 'Mancilla', 'information']
}   

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
