import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm text-blue-700 dark:text-blue-300 mb-5">
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              Syslence Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Effective Date: March 15, 2025
            </p>
          </div>

          <div className="space-y-10">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Specialist Resources Global Inc. d/b/a Syslence Technologies and our affiliates and subsidiaries (&quot;Syslence,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose and otherwise process the information we collect about you.
              </p>
            </div>

            {/* GDPR Roles */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                GDPR Roles
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  For the purposes of the EU General Data Protection Regulation (&quot;GDPR&quot;), Syslence Technologies India Pvt. Ltd. (&quot;Syslence India&quot;) acts as a Data Processor with respect to Personal Information (e.g., patients&apos; data) that Syslence India processes on behalf of its customers through our products and services. We are not responsible for the data privacy practices of our customers, which may differ from ours. If you have any questions about our customers&apos; data privacy practices, please contact them directly.
                </p>
                <p>
                  Syslence India is a Data Controller with respect to the Personal Information of: (1) individuals who visit, use, or interact with our websites; and (2) business contacts who represent Syslence India&apos;s current and prospective customers, vendors, and partners (collectively, &quot;GDPR Data Subjects&quot;). From time to time, we will supplement this Privacy Policy with additional information about our privacy practices related to a particular activity Syslence undertakes.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                When We Collect Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We may collect information about you when you:
              </p>
              <ul className="space-y-4">
                {[
                  "Visit our main website (https://syslence.com/) and other websites we own that link to this Privacy Policy (collectively, the &apos;Sites&apos;).",
                  "Contact us by submitting an online form on the Sites.",
                  "Communicate with us by email, telephone, mail, or facsimile.",
                  "Sign up to receive email, mail, or other communications from us.",
                  "Apply for a job at Syslence.",
                  "Otherwise interact with Syslence where we refer you to this Privacy Policy.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Types */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 w-fit">
                What Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We may collect the following categories of Personal Information:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Contact Information",
                    text: "Name, place of business, job title, postal address, email address, phone number, and other contact details you provide.",
                  },
                  {
                    title: "Financial Information",
                    text: "Credit card information, bank account details, and other payment information.",
                  },
                  {
                    title: "Job Application Information",
                    text: "Resume/CV, employment and education history, references, qualifications, and any demographic information you share.",
                  },
                  {
                    title: "Site Usage Information",
                    text: "Device data, IP address, browser type, pages visited, actions on the Sites, and data collected via cookies and similar technologies.",
                  },
                ].map((info, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {info.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Legal Basis for Processing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We process personal data when we have a lawful basis:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "Consent: Where you have freely given consent. You may withdraw consent at any time.",
                  "Contractual necessity: Where processing is necessary to perform a contract with you.",
                  "Legal obligation: Where processing is necessary to comply with a legal obligation.",
                  "Legitimate interests: For example, to provide and improve services, send updates, and monitor performance.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The following are examples of how we use personal information:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "Respond to you when you contact us.",
                  "Send messages about special offers and services.",
                  "Send updates about services you use.",
                  "Provide our products and services per our agreements.",
                  "Generate internal reports and analytics.",
                  "Evaluate candidacy for employment.",
                  "Serve advertisements on the Sites.",
                  "Conduct surveys and publish results.",
                  "Ensure legal compliance and exercise rights.",
                  "Protect users and ensure Site security.",
                  "Enable third-party service providers.",
                  "Investigate and prevent unlawful activities.",
                  "Facilitate financing, sale, or merger.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Share the Information We Collect */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                How We Share the Information We Collect
              </h2>
              <ul className="space-y-3 list-none">
                {[
                  "Our corporate affiliates and associates.",
                  "Third-party service providers supporting our services.",
                  "Third parties as requested or consented to by you.",
                  "Companies that acquire our business or assets.",
                  "Our employees who need access.",
                  "Courts, legal authorities, and regulators.",
                  "Tax and customs authorities.",
                  "To prevent fraud or defend against attacks.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cookies and Other Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Cookies and Other Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may use cookies, tracking pixels, and similar technologies. You may adjust browser settings to stop cookies, which may impact Site functionality. See our Cookie Policy for details.
              </p>
            </div>

            {/* Our Policy Towards Children */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Our Policy Towards Children
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our Services are not directed to children under 16. If we learn we collected such information, please contact us for deletion.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                International Data Transfers
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are primarily located in India and operate globally. Your Personal Information may be transferred internationally. By using our Sites, you acknowledge such transfers.
              </p>
            </div>

            {/* Security of Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Security of Personal Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement reasonable technical, physical, and administrative safeguards. However, no method is completely secure.
              </p>
            </div>

            {/* Retention of Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Retention of Personal Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We retain data as long as necessary for purposes collected, compliance, and legal obligations.
              </p>
            </div>

            {/* Right to Opt Out of Marketing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Right to Opt Out of Marketing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To opt out of marketing, click the unsubscribe link or contact us. You may still receive administrative communications.
              </p>
            </div>

            {/* Your Rights based on Jurisdiction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Your Rights based on Jurisdiction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>For EEA Users:</strong> GDPR Data Subjects have rights to access, rectify, delete, restrict, object, portability, and complain to a supervisory authority.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>UK ICO:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>For California Users:</strong> California residents may request information on how Personal Information has been shared for third-party marketing.
              </p>
            </div>

            {/* Do Not Track */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Do Not Track
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not currently respond to Do Not Track signals. We will monitor developments.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Third-Party Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Sites may contain external links. We are not responsible for their privacy practices.
              </p>
            </div>

            {/* Changes to this Privacy Policy */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may modify this Privacy Policy. If material changes are made, we will notify you.
              </p>
            </div>

            {/* Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Looking for something else?
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Return to Home
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
