"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/moving-border";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const taxServices = [
    {
        icon: "person",
        title: "Personal Tax Planning",
        description:
            "Tailored strategies to minimise your personal tax liabilities and maximise your savings. We work with you to optimise your tax position through careful planning and expert advice.",
    },
    {
        icon: "business",
        title: "Corporate Tax Planning",
        description:
            "Comprehensive tax solutions to minimise corporate tax liabilities and ensure compliance with UK tax laws, including R&D tax credits and other reliefs.",
    },
    {
        icon: "groups",
        title: "Payroll & Employee Benefits",
        description:
            "Seamless payroll administration and employee benefits management with integrated compliance. We handle everything from PAYE to pension auto-enrolment.",
    },
    {
        icon: "search",
        title: "Tax Investigations",
        description:
            "Professional support and representation during HMRC tax investigations and enquiries. We provide expert guidance to protect your interests and achieve the best possible outcome.",
    },
    {
        icon: "account_balance",
        title: "Estate Planning",
        description:
            "Protecting your wealth for future generations through strategic estate and inheritance tax planning. We help you structure your affairs to minimise tax on your estate.",
    },
    {
        icon: "receipt_long",
        title: "VAT",
        description:
            "Expert VAT registration, returns, and compliance services. From partial exemption to complex cross-border transactions, we ensure you stay compliant and reclaim all you are entitled to.",
    },
];

export default function TaxationContent() {
    const gridRef = useRef<HTMLUListElement>(null);
    const summaryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        const summary = summaryRef.current;

        if (grid) {
            const cards = grid.querySelectorAll("li");
            gsap.set(cards, { opacity: 0, y: 60 });
            gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: { trigger: grid, start: "top 85%", once: true },
            });
        }

        if (summary) {
            gsap.set(summary, { opacity: 0, y: 40 });
            gsap.to(summary, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: summary, start: "top 90%", once: true },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <PageHero
                title="Tax Management."
                subtitle="Empowering you to make sound financial decisions with expert tax planning and compliance services."
                breadcrumb="Taxation Services"
            />

            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-8">
                    <ul ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {taxServices.map((service) => (
                            <li key={service.title} className="min-h-[18rem] list-none">
                                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                        borderWidth={3}
                                    />
                                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-[var(--background)] p-8 lg:p-10 shadow-sm group">
                                        <div className="flex flex-col gap-6">
                                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-[var(--muted)] p-3">
                                                <span className="material-symbols-outlined text-2xl text-primary">
                                                    {service.icon}
                                                </span>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-xl lg:text-2xl serif-heading text-brand-charcoal group-hover:text-primary transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed font-light text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Summary */}
            <section className="py-24 lg:py-32 bg-brand-charcoal text-white">
                <div ref={summaryRef} className="container mx-auto px-8 max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-5xl serif-heading mb-8">
                        Empowering You to Make Sound Financial Decisions.
                    </h2>
                    <p className="text-lg text-white/70 font-light leading-relaxed mb-12">
                        Our expert team provides tailored personal and corporate tax planning to help you minimise liabilities and maximise savings. We ensure seamless payroll and employee benefits management, while offering professional support in tax investigations. With estate planning and VAT services, we guide you in protecting your wealth and staying compliant, enabling you to make informed financial decisions with confidence.
                    </p>
                    <Button
                        as="a"
                        href="/contact"
                        borderRadius="1.75rem"
                        containerClassName="h-14 w-auto mx-auto"
                        className="bg-primary/90 border-primary/50 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10 gap-3"
                        borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        </>
    );
}
