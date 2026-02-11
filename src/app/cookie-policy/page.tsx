import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Vectris Chartered Accountants",
    description: "Cookie Policy for Vectris Chartered Accountants & Business Advisors.",
};

export default function CookiePolicy() {
    return (
        <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 container mx-auto px-8 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl serif-heading text-brand-charcoal mb-10">Cookie Policy</h1>

            <div className="prose prose-lg text-slate-600 max-w-none space-y-8">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">1. Introduction</h2>
                    <p>
                        Vectris Chartered Accountants ("we", "us", or "our") uses cookies on <strong>https://vectris.co</strong> (the "Service").
                        The use of cookies is standard on the internet. Although most web browsers automatically accept cookies, the decision of whether to accept or not is yours.
                        You may adjust your browser settings to prevent the reception of cookies, or to provide notification whenever a cookie is sent to you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">2. What are cookies?</h2>
                    <p>
                        Cookies are small text files stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences
                        (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">3. How we use cookies</h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. Without these cookies, the website cannot provide the services you ask for.</li>
                        <li><strong>Analytics Cookies:</strong> We use Google Analytics to measure how you use the website so we can improve it based on user needs. Google Analytics sets cookies that store anonymized information about:
                            <ul className="list-disc pl-6 mt-2">
                                <li>How you got to the site</li>
                                <li>The pages you visit on the site</li>
                                <li>How long you spend on each page</li>
                                <li>What you click on while you're visiting the site</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">4. Managing Cookies</h2>
                    <p>
                        You can control and/or delete cookies as you wish – for details, see <a href="https://www.aboutcookies.org/" className="text-primary underline">aboutcookies.org</a>.
                        You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                        If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-brand-charcoal mb-4">5. Contact Us</h2>
                    <p>If you have any questions about our Cookie Policy, please contact us:</p>
                    <ul className="list-disc pl-6">
                        <li>By phone: 020 8544 8064</li>
                        <li>By mail: Highlands House, 165 The Broadway, Wimbledon, London SW19 1NE</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
