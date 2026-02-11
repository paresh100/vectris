"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const industries = [
    { icon: "shopping_cart", name: "E-commerce Retail" },
    { icon: "apartment", name: "Property Investment & Development" },
    { icon: "work", name: "Professional Services" },
    { icon: "public", name: "International Trading" },
    { icon: "construction", name: "Construction Industry" },
];

export default function AboutContent() {
    const contentRef = useRef<HTMLDivElement>(null);
    const industriesRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        const industriesEl = industriesRef.current;
        const cta = ctaRef.current;

        if (content) {
            const items = content.querySelectorAll("[data-reveal]");
            gsap.set(items, { opacity: 0, y: 50 });
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: { trigger: content, start: "top 85%", once: true },
            });
        }

        if (industriesEl) {
            const cards = industriesEl.querySelectorAll("[data-industry]");
            gsap.set(cards, { opacity: 0, scale: 0.9 });
            gsap.to(cards, {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "back.out(1.4)",
                scrollTrigger: { trigger: industriesEl, start: "top 85%", once: true },
            });
        }

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
                title="We deliver expertise you can trust."
                subtitle="A professional firm of Chartered Accountants based in Wimbledon, South West London."
                breadcrumb="About Vectris"
            />

            {/* Main Content */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-8">
                    <div ref={contentRef} className="max-w-4xl mx-auto space-y-8">
                        <p data-reveal className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                            If you are looking for a team of reliable, approachable, and proactive accountants who will do more than just respond to your needs but work alongside you to help you succeed, you have come to the right place.
                        </p>
                        <p data-reveal className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                            Vectris Chartered Accountants &amp; Business Advisors is a professional firm of Chartered Accountants based in Wimbledon, South West London, with <strong className="text-brand-charcoal font-semibold">over 35 years of experience</strong> assisting businesses.
                        </p>
                        <p data-reveal className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                            We offer a comprehensive range of services, including accountancy, taxation, and business advisory services to a wide range of small and medium-sized businesses and individuals.
                        </p>
                        <p data-reveal className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                            We believe in providing <strong className="text-brand-charcoal font-semibold">personal service tailored to each client</strong> through close and frequent communication. This approach strongly benefits our clients.
                        </p>
                        <p data-reveal className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                            We offer all new clients a <strong className="text-brand-charcoal font-semibold">free face-to-face initial consultation</strong> to enable us to fully understand how we can help you or your business in the future and help you decide whether we are the right fit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 lg:py-32 bg-champagne">
                <div className="container mx-auto px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-5xl serif-heading text-brand-charcoal mb-6">Industries We Serve</h2>
                        <p className="text-slate-500 font-light text-lg">
                            We work with businesses across a wide range of sectors.
                        </p>
                    </div>
                    <div ref={industriesRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                        {industries.map((ind) => (
                            <div key={ind.name} className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 bg-white/50">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div
                                    data-industry
                                    className="relative h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl border-[0.75px] border-border shadow-sm group hover:bg-[var(--muted)] transition-colors duration-500"
                                >
                                    <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">
                                        {ind.icon}
                                    </span>
                                    <p className="text-sm font-semibold text-brand-charcoal group-hover:text-primary transition-colors duration-300">
                                        {ind.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 lg:py-32 bg-brand-charcoal text-white">
                <div ref={ctaRef} className="container mx-auto px-8 text-center max-w-3xl">
                    <h2 className="text-3xl lg:text-5xl serif-heading mb-8">Get a Personal Consultation</h2>
                    <p className="text-lg text-white/70 font-light mb-12">
                        We will take care of your accounting and administrative services. Contact us today for a free consultation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-12 py-5 bg-primary text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all duration-300"
                        >
                            Free Consultation
                        </Link>
                        <a
                            href="tel:02085448064"
                            className="px-12 py-5 border border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all duration-300"
                        >
                            020 8544 8064
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
