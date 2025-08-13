import type {Metadata} from 'next'

export const metadata:Metadata = {
    title: 'Pricing Page',
    description:'SEO description for Pricing Page',
    keywords: ['pricing Page', 'Mancilla', 'information']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
