import Hero from "@/components/Hero";
import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vectris Chartered Accountants | Expert Business Advice in Wimbledon",
  description:
    "Vectris Chartered Accountants & Business Advisors in Wimbledon. Over 35 years of experience providing expert accountancy, tax, and business growth services.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
}

