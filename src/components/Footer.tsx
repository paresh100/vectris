"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll("[data-reveal]");
        gsap.set(items, { opacity: 0, y: 40 });
        gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <footer ref={ref} className="py-24 lg:py-32 bg-brand-charcoal text-white text-center relative overflow-hidden">
            {/* Large V watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[40vw] font-serif font-bold opacity-[0.03] select-none text-white leading-none">
                    V
                </span>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                {/* Logo */}
                <div data-reveal className="mb-10">
                    <Image
                        src="/vectris-logo-white.svg"
                        alt="Vectris Chartered Accountants"
                        width={200}
                        height={100}
                        className="h-24 w-auto inline-block"
                    />
                </div>

                <p data-reveal className="text-sm tracking-widest uppercase text-slate-400 mb-10">
                    Chartered Accountants &amp; Business Advisors
                </p>

                <div data-reveal className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-16">
                    <Link className="hover:text-primary transition-colors duration-300" href="/services">Services</Link>
                    <Link className="hover:text-primary transition-colors duration-300" href="/about">About</Link>
                    <Link className="hover:text-primary transition-colors duration-300" href="/about">Industries</Link>

                    <Link className="hover:text-primary transition-colors duration-300" href="/privacy-policy">Privacy</Link>
                    <Link className="hover:text-primary transition-colors duration-300" href="/cookie-policy">Cookies</Link>
                </div>

                <div data-reveal className="border-t border-slate-700 pt-10 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Vectris Chartered Accountants. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
