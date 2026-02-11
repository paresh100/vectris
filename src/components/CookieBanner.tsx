"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show banner after a slight delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-5xl rounded-xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-sm text-slate-600">
                    <p>
                        We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        Read our <Link href="/cookie-policy" className="text-primary underline hover:text-brand-charcoal">Cookie Policy</Link> and{" "}
                        <Link href="/privacy-policy" className="text-primary underline hover:text-brand-charcoal">Privacy Policy</Link>.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 bg-brand-charcoal text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary transition-colors duration-300"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 text-slate-400 hover:text-brand-charcoal transition-colors"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
