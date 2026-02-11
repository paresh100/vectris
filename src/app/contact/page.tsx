import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Vectris Chartered Accountants",
    description:
        "Get in touch with Vectris Chartered Accountants & Business Advisors. Highlands House, 165 The Broadway, Wimbledon, London SW19 1NE. Call 020 8544 8064.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactContent />
        </main>
    );
}
