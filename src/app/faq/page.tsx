import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
    title: "FAQ | Vectris Chartered Accountants & Business Advisors",
    description:
        "Frequently asked questions about Vectris Chartered Accountants & Business Advisors. Learn about our services, experience, and how to get started.",
};

export default function FAQPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who are Vectris Chartered Accountants & Business Advisors?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vectris is a team of experienced Chartered Accountants and Business Advisors based in Wimbledon, South West London. With over 35 years of experience, we are dedicated to helping businesses and individuals manage their finances, meet their goals, and achieve success.",
                },
            },
            {
                "@type": "Question",
                name: "What services do you offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide a wide range of services, including expert accountancy services, comprehensive tax planning and compliance, and business advisory services tailored to small and medium-sized businesses, as well as individuals.",
                },
            },
            {
                "@type": "Question",
                name: "What makes Vectris different from other accounting firms?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Vectris, we pride ourselves on being more than just accountants. We take a proactive approach, offering practical advice to help your business grow. Our focus is on understanding your needs and providing solutions beyond traditional accounting services.",
                },
            },
        ],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <FAQContent />
        </main>
    );
}
