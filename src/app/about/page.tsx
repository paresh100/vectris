import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us | Vectris Chartered Accountants & Business Advisors",
    description:
        "Learn about Vectris Chartered Accountants & Business Advisors — over 35 years of experience helping businesses succeed from Wimbledon, South West London.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutContent />
        </main>
    );
}
