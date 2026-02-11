import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Accounting Services | Vectris Chartered Accountants",
    description:
        "Comprehensive accounting services including annual company accounts, sole trader accounts, residential letting, company formation, management accounts, and cloud-based bookkeeping.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesContent />
        </main>
    );
}
