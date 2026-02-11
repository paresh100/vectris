"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const insights = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv4K6lWezulGs60Xgpas2-ql7XGAm4oClACnlBeB3a-Vxcf-uQNCMJv_D-IJ9L4DN0EWeH04rB0LNwKybrzYatsB-PHf0B3QifOtuQ-SWbuQKNPK0m8XEIDnG25SNfvVIfgd9wcGvfCoSlP9vTH448WQeYrtz0teskvGd4I7PseoVnlvNslo2Z77HSrnPSDM1jvbaWCrQOZxzENBKs50YUfC_6PteHqdPJDLXN5QOhxwm_guh62bLOrk9D9AQXFypKvwrBrcNwZ4Q",
        alt: "Autumn Statement",
        category: "Advisory",
        title: "The Autumn Statement: A Strategic Evaluation",
        description: "Critical implications for SME shareholders and corporate directors.",
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmQxwam5qGuaCW-4-iBf8jv8ZJfSYFISKoIlOD1xCRPMwIbnD6sVW-LTzBAAF4BfNIHOW4BWVAR6jihotHQCBfkLX5yTUmX8x07yW03FZdj4B-MYfDXVuGRgvEKKEoH879S-S31GHYTsm8_DsQe-263Iw0lvdQ_uYfdogfS_C5N-LjAJtWI09o_FQpg8DBvMoMUFoSi9Vzrse0hHKIjleoxJM3ltQP40mHgWylli4-37s_qsv6JU-XnK_EHB0pnGzOEgtd-xFugM",
        alt: "Cloud Accounting",
        category: "Technology",
        title: "Autonomous Financial Architecture",
        description: "Defining the next generation of integrated cloud-based reporting ecosystems.",
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBszkw9oiiRRNHEPY43UoPIS5GPVVTOD-oG7QnIrFSjH5xMTuoBubtQDCEixHQa-ckpr7dEir8uLppMlNdxFzTzKppAzsdaQ91N1aW941DtAMnnhUVLkJad2wGWOGsLuk6m565W5k-TmQtbCYRTZsk1EbfmKiOZPLi5Ug8q_r87Y8tB2w5qk4YuuTpgnHKDQVMl0CErrbfil9BtF4o9wDlNBjQx0A_231pfJZzf51N4m5IQ-hc0afpXcg3rMDKRq3yS-NKxtOpiTf8",
        alt: "Business Growth",
        category: "Governance",
        title: "Resilience in Volatile Environments",
        description: "Advanced liquidity management for enterprises during periods of transition.",
    },
];

export default function Insights() {
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heading = headingRef.current;
        const grid = gridRef.current;
        if (!heading || !grid) return;

        // Heading
        const headingItems = heading.querySelectorAll("[data-reveal]");
        gsap.set(headingItems, { opacity: 0, y: 60 });
        gsap.to(headingItems, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true,
            },
        });

        // Cards — each card slides up with image clip reveal
        const cards = grid.querySelectorAll("[data-card]");
        gsap.set(cards, { opacity: 0, y: 100 });
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                once: true,
            },
        });

        // Image reveal clip
        const images = grid.querySelectorAll("[data-image]");
        gsap.set(images, { clipPath: "inset(100% 0 0 0)" });
        gsap.to(images, {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            stagger: 0.2,
            delay: 0.3,
            ease: "power4.inOut",
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
        <section className="py-24 lg:py-40 bg-off-white" id="insights">
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-12">
                    <div className="max-w-xl space-y-8">
                        <h2 data-reveal className="text-4xl lg:text-6xl serif-heading text-brand-charcoal">The Briefing</h2>
                        <p data-reveal className="text-lg lg:text-xl text-slate-500 font-light">
                            Curated insights on legislative shifts and the London economic landscape.
                        </p>
                    </div>
                    <a
                        data-reveal
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-charcoal flex items-center gap-4 group border-b border-brand-charcoal pb-4"
                        href="#"
                    >
                        Archive{" "}
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                            north_east
                        </span>
                    </a>
                </div>

                {/* Insights Grid */}
                <div ref={gridRef} className="grid md:grid-cols-3 gap-8 lg:gap-16">
                    {insights.map((item) => (
                        <div key={item.title} data-card className="group space-y-8 cursor-pointer">
                            <div data-image className="aspect-[4/5] overflow-hidden bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                                    src={item.image}
                                />
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                    {item.category}
                                </span>
                                <h3 className="text-xl lg:text-2xl serif-heading group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
