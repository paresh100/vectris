"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
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
            "Statutory financial statements prepared with meticulous precision and absolute compliance for limited companies.",
    },
    {
        icon: "storefront",
        title: "Sole Trader & Partnership Accounts",
        description:
            "Comprehensive accounting solutions tailored for sole traders and partnerships to ensure accuracy and compliance.",
    },
    {
        icon: "apartment",
        title: "Residential Letting",
        description:
            "Specialist accounting and tax services for property landlords and residential letting portfolios.",
    },
    {
        icon: "corporate_fare",
        title: "Company Formation & Statutory Matters",
        description:
            "Expert guidance on company formation, mergers, and long-term structural and legal foundations.",
    },
    {
        icon: "monitoring",
        title: "Management Accounts",
        description:
            "In-depth management accounting providing the clarity required for pivotal business decisions.",
    },
    {
        icon: "cloud",
        title: "Cloud-Based Bookkeeping",
        description:
            "Architecture and deployment of modern, real-time cloud-based bookkeeping ecosystems using Xero, QuickBooks, and Sage.",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const heading = headingRef.current;
        const grid = gridRef.current;
        if (!heading || !grid) return;

        const headingItems = heading.querySelectorAll("[data-reveal]");
        gsap.set(headingItems, { opacity: 0, y: 60 });
        gsap.to(headingItems, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
        });

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
        <section ref={sectionRef} className="py-24 lg:py-40 relative overflow-hidden bg-white" id="services">
            <div className="container mx-auto px-8 relative z-10">
                {/* Section Header */}
                <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-12">
                    <div className="max-w-2xl space-y-8">
                        <h2 data-reveal className="text-4xl lg:text-6xl serif-heading text-brand-charcoal">
                            Accounting Services
                        </h2>
                        <p data-reveal className="text-lg lg:text-xl text-slate-500 font-light">
                            Reliable, proactive accountancy services that go beyond meeting your needs — helping your business grow.
                        </p>
                    </div>
                </div>

                {/* Service Cards Grid — with GlowingEffect */}
                <ul ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <li key={service.title} className="min-h-[16rem] list-none">
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
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary gap-3 group/link"
                                    >
                                        Learn More
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform duration-300">
                                            east
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
