"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/moving-border";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface GlowCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    area?: string;
}

function GlowCard({ icon, title, children, area }: GlowCardProps) {
    return (
        <li className={`min-h-[10rem] list-none ${area || ""}`}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-border bg-[var(--background)] p-6 shadow-sm md:p-8">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-[var(--muted)] p-2.5">
                        {icon}
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                            {title}
                        </h3>
                        <div className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default function ContactContent() {
    const formRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const form = formRef.current;
        const cards = cardsRef.current;

        if (cards) {
            const items = cards.querySelectorAll("li");
            gsap.set(items, { opacity: 0, y: 40 });
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: { trigger: cards, start: "top 85%", once: true },
            });
        }

        if (form) {
            const items = form.querySelectorAll("[data-form]");
            gsap.set(items, { opacity: 0, y: 30 });
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: { trigger: form, start: "top 85%", once: true },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <PageHero
                title="Get in Touch."
                subtitle="Arrange a free, no-obligation consultation to discuss your requirements."
                breadcrumb="Contact Us"
            />

            {/* Glowing Info Cards */}
            <section className="py-20 lg:py-28 bg-champagne">
                <div className="container mx-auto px-8">
                    <ul ref={cardsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <GlowCard
                            icon={<MapPin className="h-5 w-5 text-primary" />}
                            title="Our Office"
                        >
                            <p>Highlands House, 165 The Broadway,</p>
                            <p>Wimbledon, London SW19 1NE</p>
                        </GlowCard>

                        <GlowCard
                            icon={<Phone className="h-5 w-5 text-primary" />}
                            title="Telephone"
                        >
                            <a href="tel:02085448064" className="hover:text-primary transition-colors font-medium">
                                020 8544 8064
                            </a>
                        </GlowCard>

                        <GlowCard
                            icon={<Mail className="h-5 w-5 text-primary" />}
                            title="Email"
                        >
                            <a href="mailto:info@vectris.co" className="hover:text-primary transition-colors font-medium">
                                info@vectris.co
                            </a>
                        </GlowCard>

                        <GlowCard
                            icon={<Clock className="h-5 w-5 text-primary" />}
                            title="Open Hours"
                        >
                            <p>Monday — Friday</p>
                            <p className="font-medium">9:00am — 5:00pm</p>
                        </GlowCard>
                    </ul>
                </div>
            </section>

            {/* Premium Contact Form with Netlify */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-8 max-w-4xl">
                    <div ref={formRef}>
                        <div data-form className="text-center mb-16">
                            <span className="inline-flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                                <span className="w-10 h-px bg-primary" />
                                Send a Message
                                <span className="w-10 h-px bg-primary" />
                            </span>
                            <h2 className="text-3xl lg:text-5xl serif-heading text-brand-charcoal mb-4">
                                How Can We Help?
                            </h2>
                            <p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
                                Fill in the form below and we&apos;ll get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Netlify Form */}
                        <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative overflow-hidden rounded-xl border-[0.75px] border-border bg-[var(--background)] p-8 md:p-12 shadow-sm">
                                <form
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                    className="space-y-10"
                                >
                                    {/* Netlify hidden fields */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p className="hidden">
                                        <label>
                                            Don&apos;t fill this out: <input name="bot-field" />
                                        </label>
                                    </p>

                                    <div data-form className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                                Full Name <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300 text-sm"
                                                type="text"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                                Organisation
                                            </label>
                                            <input
                                                name="organisation"
                                                className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300 text-sm"
                                                type="text"
                                                placeholder="Company name"
                                            />
                                        </div>
                                    </div>

                                    <div data-form className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                                Email <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                name="email"
                                                required
                                                className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300 text-sm"
                                                type="email"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                                Telephone
                                            </label>
                                            <input
                                                name="phone"
                                                className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300 text-sm"
                                                type="tel"
                                                placeholder="+44 (0)20 8544 8064"
                                            />
                                        </div>
                                    </div>

                                    <div data-form className="space-y-3">
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                            Service Interest
                                        </label>
                                        <select
                                            name="service"
                                            className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal text-sm appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="Annual Company Accounts">Annual Company Accounts</option>
                                            <option value="Sole Trader & Partnership Accounts">Sole Trader & Partnership Accounts</option>
                                            <option value="Company Formation">Company Formation</option>
                                            <option value="Cloud-Based Bookkeeping">Cloud-Based Bookkeeping</option>
                                            <option value="Personal Tax Returns">Personal Tax Returns</option>
                                            <option value="Corporate Tax Planning">Corporate Tax Planning</option>
                                            <option value="VAT Returns">VAT Returns</option>
                                            <option value="Payroll Services">Payroll Services</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div data-form className="space-y-3">
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                                            How can we help? <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal resize-none placeholder:text-slate-300 text-sm"
                                            rows={5}
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <div data-form className="flex flex-wrap items-center justify-between gap-6 pt-4">
                                        <Button
                                            as="button"
                                            type="submit"
                                            borderRadius="1.75rem"
                                            containerClassName="h-14 w-auto"
                                            className="bg-brand-charcoal/90 border-brand-charcoal/50 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10 gap-3"
                                            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                                        >
                                            Submit Enquiry
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                        <Link
                                            href="/faq"
                                            className="text-primary text-xs font-bold uppercase tracking-widest hover:text-brand-charcoal transition-colors duration-300 inline-flex items-center gap-2 group"
                                        >
                                            View FAQ
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
