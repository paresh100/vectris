import type { Metadata } from "next";
import TaxationContent from "./TaxationContent";

export const metadata: Metadata = {
    title: "Tax Management | Vectris Chartered Accountants",
    description:
        "Expert tax services including personal and corporate tax planning, payroll, HMRC investigations, estate planning, and VAT compliance.",
};

export default function TaxationPage() {
    return (
        <main>
            <TaxationContent />
        </main>
    );
}
