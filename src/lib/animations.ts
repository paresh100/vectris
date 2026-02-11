"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for scroll-triggered reveal animations.
 * Elements fade up into view as they enter the viewport.
 */
export function useScrollReveal<T extends HTMLElement>(
    options?: {
        y?: number;
        duration?: number;
        delay?: number;
        stagger?: number;
        start?: string;
    }
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const children = el.querySelectorAll("[data-reveal]");
        const targets = children.length > 0 ? children : [el];

        gsap.set(targets, { opacity: 0, y: options?.y ?? 60 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: options?.start ?? "top 85%",
                once: true,
            },
        });

        tl.to(targets, {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 1,
            delay: options?.delay ?? 0,
            stagger: options?.stagger ?? 0.15,
            ease: "power3.out",
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [options?.y, options?.duration, options?.delay, options?.stagger, options?.start]);

    return ref;
}

/**
 * Hook for staggered hero entrance animation (no scroll trigger — fires on mount).
 */
export function useHeroEntrance<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll("[data-hero]");

        gsap.set(items, { opacity: 0, y: 80 });

        const tl = gsap.timeline({ delay: 0.3 });

        tl.to(items, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
        });

        return () => { tl.kill(); };
    }, []);

    return ref;
}

/**
 * Hook for parallax scroll effect on an element.
 */
export function useParallax<T extends HTMLElement>(speed: number = 0.3) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.to(el, {
            y: () => speed * 100,
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [speed]);

    return ref;
}

/**
 * Hook for split-text character animation.
 */
export function useTextReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const text = el.textContent || "";
        el.innerHTML = "";

        text.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            el.appendChild(span);
        });

        const chars = el.querySelectorAll("span");

        gsap.set(chars, { opacity: 0, y: 40, rotateX: -90 });

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "back.out(1.7)",
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

    return ref;
}
