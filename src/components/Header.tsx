"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const navItemsRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        gsap.set(header, { y: -100, opacity: 0 });
        gsap.to(header, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
            clearProps: "transform",
        });

        const links = navItemsRef.current?.querySelectorAll("a");
        if (links) {
            gsap.set(links, { y: -20, opacity: 0 });
            gsap.to(links, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
                delay: 1,
                ease: "power2.out",
                clearProps: "all",
            });
        }

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/taxation", label: "Taxation" },
        { href: "/about", label: "About" },
        { href: "/faq", label: "FAQ" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 w-full z-[100] backdrop-blur-md border-b transition-all duration-500 ${scrolled
                ? "bg-white/95 border-slate-200 shadow-sm h-20"
                : "bg-white/90 border-slate-100 h-24"
                }`}
        >
            <nav className="container mx-auto px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/vectris-logo-white.png"
                        alt="Vectris Chartered Accountants"
                        width={160}
                        height={80}
                        className={`transition-all duration-500 brightness-0 opacity-80 ${scrolled ? "h-12 w-auto" : "h-16 w-auto"}`}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div
                    ref={navItemsRef}
                    className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className={`transition-colors duration-300 relative group ${isActive(link.href) ? "text-primary" : "hover:text-primary"
                                }`}
                            href={link.href}
                        >
                            {link.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </Link>
                    ))}
                    <Link
                        className="border border-brand-charcoal px-8 py-3 hover:bg-brand-charcoal hover:text-white transition-all duration-300"
                        href="/contact"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-brand-charcoal transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-brand-charcoal transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-brand-charcoal transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 px-8 py-8 space-y-6 text-[11px] font-bold uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className={`block transition-colors ${isActive(link.href) ? "text-primary" : "hover:text-primary"}`}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        className="inline-block border border-brand-charcoal px-8 py-3 hover:bg-brand-charcoal hover:text-white transition-all duration-300"
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </header>
    );
}
