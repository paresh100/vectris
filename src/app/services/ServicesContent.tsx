"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/moving-border";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: "description",
        title: "Annual Company Accounts",
        description:
            "Statutory financial statements prepared with meticulous precision and absolute compliance for limited companies. We ensure your accounts meet all legal requirements while providing clear insight into your business performance.",
    },
    {
        icon: "storefront",
        title: "Sole Trader & Partnership Accounts",
        description:
            "Comprehensive accounting solutions tailored for sole traders and partnerships. From bookkeeping to year-end accounts, we streamline your financial processes to ensure accuracy and compliance.",
    },
    {
        icon: "apartment",
        title: "Residential Letting",
        description:
            "Specialist accounting and tax services for property landlords and residential letting portfolios. We help you navigate complex property tax rules and maximise your returns.",
    },
    {
        icon: "corporate_fare",
        title: "Company Formation & Statutory Matters",
        description:
            "Expert guidance on company formation, statutory filings, and the preparation of required documentation, such as minutes and resolutions. We handle the long-term structural and legal foundations of your business.",
    },
    {
        icon: "monitoring",
        title: "Management Accounts",
        description:
            "In-depth management accounting providing the clarity required for pivotal business decisions. Regular, timely reports that give you a real-time view of your financial position.",
    },
    {
        icon: "cloud",
        title: "Cloud-Based Bookkeeping",
        description:
            "Architecture and deployment of modern, real-time cloud-based bookkeeping ecosystems using Xero, QuickBooks, and Sage. Access your financial data anytime, anywhere.",
    },
];

export default function ServicesContent() {
    const gridRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const cards = grid.querySelectorAll("li");
        gsap.set(cards, { opacity: 0, y: 80, scale: 0.95 });
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: grid, start: "top 85%", once: true },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <PageHero
                title="Accounting Services."
                subtitle="Reliable, proactive accountancy services that go beyond meeting your needs — helping your business grow."
                breadcrumb="Our Services"
            />

            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-8">
                    <ul ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service) => (
                            <li key={service.title} className="min-h-[18rem] list-none">
                                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                        borderWidth={3}
                                    />
                                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-[var(--background)] p-8 lg:p-10 shadow-sm group">
                                        <div className="flex flex-col gap-6">
                                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-[var(--muted)] p-3">
                                                <span className="material-symbols-outlined text-2xl text-primary">
                                                    {service.icon}
                                                </span>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-xl lg:text-2xl serif-heading text-brand-charcoal group-hover:text-primary transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed font-light text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-24 bg-champagne">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl serif-heading text-brand-charcoal mb-6">
                        Need help with your accounts?
                    </h2>
                    <p className="text-slate-500 font-light text-lg mb-10 max-w-xl mx-auto">
                        Contact us today for a free, no-obligation consultation.
                    </p>
                    <Button
                        as="a"
                        href="/contact"
                        borderRadius="1.75rem"
                        containerClassName="h-14 w-auto mx-auto"
                        className="bg-brand-charcoal/90 border-brand-charcoal/50 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10 gap-3"
                        borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        </>
    );
}
