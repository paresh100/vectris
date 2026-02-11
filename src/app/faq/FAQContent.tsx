"use client";

import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";

const faqItems = [
    {
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of accounting and business advisory services, including tax planning, auditing, bookkeeping, payroll, and strategic business advice tailored to your specific needs."
    },
    {
        question: "How do I switch accountants?",
        answer: "Switching to Vectris is simple. We handle the entire process for you, contacting your previous accountant to arrange the transfer of records and ensuring a seamless transition with no disruption to your business."
    },
    {
        question: "Do you work with small businesses?",
        answer: "Yes, we specialize in supporting small and medium-sized enterprises (SMEs). We understand the unique challenges you face and provide scalable solutions to help your business grow."
    },
    {
        question: "How much do you charge?",
        answer: "Our fees are transparent and tailored to the services you require. We offer fixed-fee packages so you know exactly what to expect, with no hidden costs. Contact us for a personalized quote."
    },
    {
        question: "Can you help with tax investigations?",
        answer: "Absolutely. We have extensive experience in dealing with HMRC tax investigations. We can represent you, handle all correspondence, and work to resolve the matter as efficiently as possible."
    },
    {
        question: "Where are you located?",
        answer: "We are based in Wimbledon, South West London. However, we work with clients across London and the UK, utilizing digital tools to provide remote support whenever needed."
    },
    {
        question: "Do you offer a free consultation?",
        answer: "Yes, we offer a complimentary initial consultation to discuss your business needs and how we can help. It's a great opportunity to meet our team and see if we're the right fit for you."
    },
    {
        question: "What accounting software do you support?",
        answer: "We are experts in major cloud accounting platforms like Xero, QuickBooks, and Sage. We can help you set up, train your team, and optimize these systems for your business."
    }
];

export default function FAQContent() {
    return (
        <>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Common questions about our services and how we can help your business."
                breadcrumb="FAQ"
            />
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-8 max-w-4xl">
                    <FAQ items={faqItems} />
                </div>
            </section>
        </>
    );
}
