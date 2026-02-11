"use client";

import { useScrollReveal } from "@/lib/animations";

export default function Partners() {
    const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.8 });

    return (
        <section ref={ref} className="py-24 bg-champagne border-b border-slate-100">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <span data-reveal className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
                        Integrated Digital Ecosystems
                    </span>
                    <div data-reveal className="flex flex-wrap justify-center items-center gap-16 lg:gap-24">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Xero Logo"
                            className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1g0-1Udr1YPG3XmbZeBtaiVXMhEeo5Eo8c-6LNcwDtWnP4II73APwxsiMy-MYX-1lYAQsfGDI5wUO-iesqBeaxRVGKCOymR5lvFzBKlUWzAWtjXJPiaWV4aw8McZLsMaYARoqoCDL4T_TPHc8j-m-xdgXG2c13lKnV6G4RvFUSg-wPFmPSGEved6o0a4hXBc25YdekNqr6vvzVYzDB_zoQRn0Zg5iz358RRqkw1Yfq0WLovTzkM0ZsWrRHxnEUiB4fWs-KU9KBfQ"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="QuickBooks Logo"
                            className="h-5 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yqwAOJfrzNYTGwziL8vrBDLiiJ05xz3riSYxkIw9irB83SRPZblcMw2zNsKoc2sgg36zSVEjclWdg-g7cSxqIEWoxQdGldaK8yyXFEW--Xu5H2YeAQ_RpYFaH7d0y839GO2J1_qKlnzv_BWyX-4LGFwswN7rq-U_sRL43NshUV0_1ebnwQGX6JA7n3IS6bdDlgkdD6QeAnRlz7UikRs3-2CVzO7XZ682PmB6MfZIXHnTHtXvrti167XOAeyt6jHGx53v7HjZRps"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Sage Logo"
                            className="h-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX06srHRB_T1UJWFlwVx5-LXBvAwOJq4wF3tV4m-N3dUI1dSvBk6cV9757mNyxzbTmPqhNIL_fRPEEuHDNKRSQE4lihg8lsLIkvQHtMV9qYbNTXF3ic0SoEwvbgS3prDWP2HjG8ON-Wz_-uhYUtOB-oF37VLAAkXXSDTzKeH9YUmGoXxJymPQ9hJx63UKrv2S1zeYgm5U7kBbzFDb5qicc-gs0tI0ZrUg5rh397O8dvjIxybAcQ-jAmODu4zKSrB49oJZY0tzAsIw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
