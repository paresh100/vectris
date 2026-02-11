"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/moving-border";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqItems = [
    {
        question: "Who are Vectris Chartered Accountants & Business Advisors?",
        answer:
            "Vectris is a team of experienced Chartered Accountants and Business Advisors based in Wimbledon, South West London. With over 35 years of experience, we are dedicated to helping businesses and individuals manage their finances, meet their goals, and achieve success.",
    },
    {
        question: "What services do you offer?",
        answer:
            "We provide a wide range of services, including expert accountancy services, comprehensive tax planning and compliance, and business advisory services tailored to small and medium-sized businesses, as well as individuals.",
    },
    {
        question: "What makes Vectris different from other accounting firms?",
        answer:
            "At Vectris, we pride ourselves on being more than just accountants. We take a proactive approach, offering practical advice to help your business grow. Our focus is on understanding your needs and providing solutions beyond traditional accounting services.",
    },
    {
        question: "Who can benefit from your services?",
        answer:
            "Our services are designed for small and medium-sized businesses and individuals. Whether you're a startup, an established business, or someone seeking personal financial advice, we tailor our services to meet your needs.",
    },
    {
        question: "How long have you been in business?",
        answer:
            "Vectris has been helping clients for over 35 years. Our long-standing experience means you can trust us to provide reliable and professional advice.",
    },
    {
        question: "How can cloud accounting benefit my business?",
        answer:
            "Cloud accounting allows for real-time access to financial data, remote collaboration, and efficient record management, which helps streamline business operations.",
    },
    {
        question: "Do you handle tax returns for individuals and businesses?",
        answer:
            "Yes, we assist with personal tax returns, corporate tax returns, and tax planning strategies.",
    },
    {
        question: "Can you help with HMRC investigations?",
        answer:
            "Absolutely. We provide support during HMRC investigations, representing you to ensure the best possible outcome.",
    },
    {
        question: "Do you assist with company formations and secretarial duties?",
        answer:
            "Yes, we handle company formations, statutory filings, and the preparation of required documentation, such as minutes and resolutions.",
    },
    {
        question: "How do I get started with Vectris?",
        answer:
            "Getting started is simple. Contact us by phone or email, and we'll arrange a consultation to discuss your needs and how we can help you achieve your financial goals.",
    },
    {
        question: "Where are you located?",
        answer:
            "We are located in Wimbledon, South West London, but we serve clients from various locations. We also offer remote services for your convenience.",
    },
    {
        question: "How can I contact Vectris?",
        answer:
            "You can contact us via phone at 020 8544 8064, email at info@vectris.co, or through the contact form on our Contact page. We're always happy to discuss how we can assist you and your business.",
    },
];

export default function FAQContent() {
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cta = ctaRef.current;
        if (cta) {
            gsap.set(cta, { opacity: 0, y: 40 });
            gsap.to(cta, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: cta, start: "top 90%", once: true },
            });
        }
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <PageHero
                title="Frequently Asked Questions."
                subtitle="Everything you need to know about our services and how we can help your business."
                breadcrumb="FAQ"
            />

            {/* FAQ Accordion */}
            <section className="py-24 lg:py-32 bg-champagne">
                <div className="container mx-auto px-8 max-w-4xl">
                    <FAQ items={faqItems} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 lg:py-32 bg-brand-charcoal text-white relative overflow-hidden">
                {/* Decorative white logo watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image
                        src="/vectris-logo-white.png"
                        alt=""
                        width={600}
                        height={300}
                        className="opacity-[0.03] select-none"
                        aria-hidden="true"
                    />
                </div>

                <div ref={ctaRef} className="container mx-auto px-8 text-center max-w-3xl relative z-10">
                    <h2 className="text-3xl lg:text-5xl serif-heading mb-8">
                        Still have questions?
                    </h2>
                    <p className="text-lg text-white/70 font-light mb-12">
                        We&apos;re here to help. Get in touch and we&apos;ll arrange a free consultation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button
                            as="a"
                            href="/contact"
                            borderRadius="1.75rem"
                            containerClassName="h-14 w-auto"
                            className="bg-primary/90 border-primary/50 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10"
                            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                        >
                            Contact Us
                        </Button>
                        <Button
                            as="a"
                            href="tel:02085448064"
                            borderRadius="1.75rem"
                            containerClassName="h-14 w-auto"
                            className="bg-brand-charcoal border-white/30 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10"
                            borderClassName="bg-[radial-gradient(var(--white)_40%,transparent_60%)]"
                        >
                            020 8544 8064
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
