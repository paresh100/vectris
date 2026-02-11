import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Vectris Chartered Accountants",
    description: "Privacy Policy for Vectris Chartered Accountants & Business Advisors.",
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 container mx-auto px-8 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl serif-heading text-brand-charcoal mb-10">Privacy Policy</h1>

            <div className="prose prose-lg text-slate-600 max-w-none space-y-8">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">1. Introduction</h2>
                    <p>
                        Vectris Chartered Accountants ("we", "us", or "our") respects your privacy and is committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from)
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">2. The Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data:</strong> includes first name, last name, title.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">5. Contact Us</h2>
                    <p>
                        Vectris Chartered Accountants is the controller and responsible for your personal data.
                        If you have any questions about this privacy policy, please contact us using the details set out below.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Highlands House, 165 The Broadway, Wimbledon, London SW19 1NE</li>
                        <li>020 8544 8064</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
