import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'SEO description for About Page',
    keywords: ['about Page', 'Mancilla', 'information']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}