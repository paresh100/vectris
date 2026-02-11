"use client";

import { useHeroEntrance, useParallax } from "@/lib/animations";
import Image from "next/image";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/moving-border";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const heroRef = useHeroEntrance<HTMLDivElement>();
    const bgRef = useParallax<HTMLDivElement>(0.2);

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image + Overlay with parallax */}
            <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
                <div className="absolute inset-0 hero-video-overlay z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="/ultra-professional_corporate_business_consulting__712a5513-c690-4ac3-8322-0b8e4c51d3f5_0.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Large watermark text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h2 className="text-[25vw] font-serif font-bold text-outline uppercase select-none leading-none opacity-20">
                    Vectris
                </h2>
            </div>

            {/* Hero Content — staggered entrance */}
            <div ref={heroRef} className="container mx-auto px-8 relative z-20">
                <div className="max-w-4xl">
                    {/* Logo in hero */}
                    import Logo from "@/components/Logo";

                    // ... existing code ...

                    {/* Logo moved to bottom right */}
                    <div data-hero className="absolute bottom-8 right-8 z-30 hidden md:block text-white">
                        <Logo
                            className="h-20 w-auto opacity-80"
                        />
                    </div>

                    <div data-hero className="inline-flex items-center gap-4 mb-8 text-primary">
                        <div className="w-12 h-px bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                            Chartered Accountants &amp; Business Advisors
                        </span>
                    </div>

                    <h1 data-hero className="text-4xl sm:text-6xl lg:text-8xl serif-heading font-bold text-white leading-tight mb-8">
                        Helping Your <br />
                        Business <span className="italic font-normal">To Grow.</span>
                    </h1>

                    <p data-hero className="text-lg sm:text-xl text-white/80 font-light max-w-2xl mb-12">
                        Based in Wimbledon, South West London, with over 35 years of experience helping businesses succeed. Expert accountancy, tax, and business advisory services for SMEs and individuals.
                    </p>

                    <div data-hero className="flex flex-wrap gap-4 sm:gap-6">
                        <Button
                            as="a"
                            href="/contact"
                            borderRadius="1.75rem"
                            containerClassName="h-14 w-auto"
                            className="bg-brand-charcoal/90 border-brand-charcoal/50 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10 gap-3"
                            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                        >
                            Contact Us
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                            as="a"
                            href="/services"
                            borderRadius="1.75rem"
                            containerClassName="h-14 w-auto"
                            className="bg-white/10 border-white/30 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10"
                            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                        >
                            Our Services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
