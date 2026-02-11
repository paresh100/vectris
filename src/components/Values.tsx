"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const taxServices = [
    {
        icon: "person",
        title: "Personal Tax Planning",
        description: "Tailored strategies to minimise your personal tax liabilities and maximise your savings.",
    },
    {
        icon: "business",
        title: "Corporate Tax Planning",
        description: "Comprehensive solutions to minimise corporate tax liabilities and ensure compliance with UK tax laws, including R&D tax credits.",
    },
    {
        icon: "groups",
        title: "Payroll & Employee Benefits",
        description: "Seamless payroll administration and employee benefits management with integrated compliance.",
    },
    {
        icon: "search",
        title: "Tax Investigations",
        description: "Professional support and representation during HMRC tax investigations and enquiries.",
    },
    {
        icon: "account_balance",
        title: "Estate Planning",
        description: "Protecting your wealth for future generations through strategic estate and inheritance tax planning.",
    },
    {
        icon: "receipt_long",
        title: "VAT",
        description: "Expert VAT registration, returns, and compliance services to keep your business on track.",
    },
];

export default function Values() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const heading = headingRef.current;
        const grid = gridRef.current;
        if (!section || !heading || !grid) return;

        // Heading reveal
        const headingItems = heading.querySelectorAll("[data-reveal]");
        gsap.set(headingItems, { opacity: 0, y: 40 });
        gsap.to(headingItems, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true,
            },
        });

        // Cards stagger
        const cards = grid.querySelectorAll("[data-value]");
        gsap.set(cards, { opacity: 0, x: -60 });
        gsap.to(cards, {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                once: true,
            },
        });

        // Icons pulse
        const icons = grid.querySelectorAll("[data-icon]");
        gsap.set(icons, { scale: 0, rotation: -45 });
        gsap.to(icons, {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                once: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 lg:py-40 bg-brand-charcoal text-white relative overflow-hidden" id="taxation">
            <div className="container mx-auto px-8 relative z-10">
                {/* Header */}
                <div ref={headingRef} className="max-w-2xl mb-16 lg:mb-24 space-y-8">
                    <h2 data-reveal className="text-4xl lg:text-6xl serif-heading">Tax Management</h2>
                    <p data-reveal className="text-lg lg:text-xl text-slate-400 font-light">
                        Empowering you to make sound financial decisions.
                        Our expert team provides tailored personal and corporate tax planning to help you minimise liabilities and maximise savings.
                    </p>
                </div>

                {/* Tax Services Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {taxServices.map((service) => (
                        <div key={service.title} data-value className="space-y-6 group">
                            <span data-icon className="material-symbols-outlined text-4xl text-primary inline-block group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </span>
                            <h3 className="text-lg serif-heading tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">{service.description}</p>
                            <a
                                className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary gap-4 group/link"
                                href="#"
                            >
                                Learn More{" "}
                                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform duration-300">
                                    east
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
