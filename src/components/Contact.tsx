"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const info = infoRef.current;
        const form = formRef.current;
        if (!section || !info || !form) return;

        const infoItems = info.querySelectorAll("[data-reveal]");
        gsap.set(infoItems, { opacity: 0, x: -60 });
        gsap.to(infoItems, {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
            },
        });

        const formItems = form.querySelectorAll("[data-form]");
        gsap.set(formItems, { opacity: 0, x: 60 });
        gsap.to(formItems, {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-champagne" id="contact">
            <div className="container mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
                    {/* Info Panel */}
                    <div ref={infoRef} className="space-y-12">
                        <div className="space-y-8">
                            <h2 data-reveal className="text-4xl lg:text-6xl serif-heading text-brand-charcoal">Get a Personal Consultation.</h2>
                            <p data-reveal className="text-slate-500 text-lg font-light">
                                Are you looking for reliable, proactive accountants who go beyond meeting your needs? Arrange a no-obligation consultation to discuss your requirements.
                            </p>
                        </div>

                        <div data-reveal className="space-y-8 border-t border-slate-200 pt-12">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-primary text-xl mt-1">location_on</span>
                                <div>
                                    <p className="text-brand-charcoal text-sm font-bold uppercase tracking-wider mb-2">Office</p>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        Highlands House, 165 The Broadway,<br />
                                        Wimbledon, London SW19 1NE
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-primary text-xl mt-1">phone</span>
                                <div>
                                    <p className="text-brand-charcoal text-sm font-bold uppercase tracking-wider mb-2">Telephone</p>
                                    <a href="tel:02085448064" className="text-slate-500 font-light hover:text-primary transition-colors">020 8544 8064</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-primary text-xl mt-1">email</span>
                                <div>
                                    <p className="text-brand-charcoal text-sm font-bold uppercase tracking-wider mb-2">Email</p>
                                    <a href="mailto:info@vectris.co" className="text-slate-500 font-light hover:text-primary transition-colors">info@vectris.co</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-primary text-xl mt-1">schedule</span>
                                <div>
                                    <p className="text-brand-charcoal text-sm font-bold uppercase tracking-wider mb-2">Open Hours</p>
                                    <p className="text-slate-500 font-light">Monday to Friday: 9am — 5pm</p>
                                </div>
                            </div>
                        </div>

                        <div data-reveal className="flex gap-6 pt-4">
                            <a
                                className="w-12 h-12 bg-brand-charcoal text-white flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                                href="#"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                className="w-12 h-12 bg-brand-charcoal text-white flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                                href="#"
                                aria-label="X / Twitter"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} className="space-y-8">
                        <div data-form className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                                    Full Name
                                </label>
                                <input
                                    className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300"
                                    type="text"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                                    Organisation
                                </label>
                                <input
                                    className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300"
                                    type="text"
                                    placeholder="Company name"
                                />
                            </div>
                        </div>
                        <div data-form className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                                    Email
                                </label>
                                <input
                                    className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300"
                                    type="email"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                                    Telephone
                                </label>
                                <input
                                    className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal placeholder:text-slate-300"
                                    type="tel"
                                    placeholder="+44 (0)7700 000 000"
                                />
                            </div>
                        </div>
                        <div data-form className="space-y-3">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                                How can we help?
                            </label>
                            <textarea
                                className="w-full border-b-2 border-slate-200 bg-transparent py-4 px-0 outline-none focus:border-primary transition-colors duration-300 text-brand-charcoal resize-none placeholder:text-slate-300"
                                rows={4}
                                placeholder="Describe your requirements..."
                            />
                        </div>
                        <div data-form>
                            <button
                                className="bg-brand-charcoal text-white px-16 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 group flex items-center gap-4"
                                type="submit"
                            >
                                Submit Enquiry
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
