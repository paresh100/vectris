"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll("[data-hero]");
        gsap.set(items, { opacity: 0, y: 60 });
        gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            delay: 0.3,
            ease: "power3.out",
        });
    }, []);

    return (
        <section
            ref={ref}
            className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-brand-charcoal text-white overflow-hidden"
        >
            {/* Decorative V */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[30vw] font-serif font-bold opacity-[0.03] select-none text-white leading-none">
                    V
                </span>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                {breadcrumb && (
                    <div data-hero className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                            {breadcrumb}
                        </span>
                    </div>
                )}
                <h1 data-hero className="text-4xl sm:text-5xl lg:text-7xl serif-heading font-bold leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p data-hero className="mt-8 text-lg sm:text-xl text-white/70 font-light max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
