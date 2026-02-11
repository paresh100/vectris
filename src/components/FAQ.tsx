"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const faqItems = el.querySelectorAll("[data-faq]");
        gsap.set(faqItems, { opacity: 0, y: 30 });
        gsap.to(faqItems, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="space-y-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    data-faq
                    className="border border-slate-200 bg-white overflow-hidden transition-all duration-300"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
                    >
                        <span className="text-sm lg:text-base font-semibold text-brand-charcoal group-hover:text-primary transition-colors duration-300 pr-4">
                            {item.question}
                        </span>
                        <span
                            className={`material-symbols-outlined text-xl text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""
                                }`}
                        >
                            add
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-slate-500 font-light leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
