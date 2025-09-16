

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                Privacy Policy
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">
                Syslence Privacy Policy
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Effective Date: March 15, 2025</p>
            </div>

            <div className="space-y-8">
              {/* Introduction Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Specialist Resources Global Inc. d/b/a Syslence Technologies and our affiliates and subsidiaries ("Syslence," "we," "us," or "our") are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose and otherwise process the information we collect about you.
                </p>
              </div>

              {/* GDPR Roles Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">GDPR Roles</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For the purposes of the EU General Data Protection Regulation ("GDPR"), Syslence Technologies India Pvt. Ltd. ("Syslence India") acts as a Data Processor with respect to Personal Information (e.g., patients' data) that Syslence India processes on behalf of its customers through our products and services. We are not responsible for the data privacy practices of our customers, which may differ from ours. If you have any questions about our customers' data privacy practices, please contact them directly.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Syslence India is a Data Controller with respect to the Personal Information of: (1) individuals who visit, use, or interact with our websites; and (2) business contacts who represent Syslence India's current and prospective customers, vendors, and partners (collectively, "GDPR Data Subjects"). From time to time, we will supplement this Privacy Policy with additional information about our privacy practices related to a particular activity Syslence undertakes.
                  </p>
                </div>
              </div>

              {/* Information Collection Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">When We Collect Information</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">We may collect information about you when you:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Visit our main website (https://syslence.com/) and other websites we own that link to this Privacy Policy (collectively, the "Sites").</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Contact us by submitting an online form on the Sites.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Communicate with us by email, telephone, mail, or facsimile.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Sign up to receive email, mail, or other communications from us.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Apply for a job at Syslence.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">Otherwise interact with Syslence where we refer you to this Privacy Policy.</span>
                  </li>
                </ul>
              </div>

              {/* Information Types Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">What Information We Collect</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">We may collect the following categories of Personal Information:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Name, place of business, job title, postal address, email address, phone number, and other contact details you provide.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Financial Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Credit card information, bank account details, and other payment information.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Job Application Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Resume/CV, employment and education history, references, qualifications, and any demographic information you share.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Site Usage Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Device data, IP address, browser type, pages visited, actions on the Sites, and data collected via cookies and similar technologies.</p>
                  </div>
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
                    "Consent: Where you have freely given consent. You may withdraw consent at any time using the contact details below.",
                    "Contractual necessity: Where processing is necessary to perform a contract with you.",
                    "Legal obligation: Where processing is necessary to comply with a legal obligation.",
                    "Legitimate interests: For example, to provide and improve our services, send updates, and monitor performance.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start before:content-[''] before:flex-shrink-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
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
                  The following are examples of how we use personal information and the legal bases we rely on (for GDPR Data Subjects):
                </p>
                <ul className="space-y-3 list-none">
                  {[
                    "Respond to you when you contact us (Legitimate interests; Performance of a contract).",
                    "Send messages about special offers and products/services (Legitimate interests).",
                    "Send updates about products/services you use and customer service communications (Legitimate interests; Performance of a contract).",
                    "Provide our products and services per our agreements (Legitimate interests; Performance of a contract).",
                    "Generate internal reports and analytics to improve user experience (Legitimate interests).",
                    "Evaluate candidacy for employment (Legitimate interests; Consent).",
                    "Serve advertisements on the Sites (Legitimate interests).",
                    "Conduct surveys and publish results (Legitimate interests; Consent depending on jurisdiction).",
                    "Ensure legal compliance and exercise legal rights (Legitimate interests; Legal obligation).",
                    "Protect users, third parties, and our rights and property, and ensure Site security (Legitimate interests).",
                    "Carry out internal functions such as information management, account processing, and client services (Legitimate interests).",
                    "Enable third-party service providers to support our services (Legitimate interests; Performance of a contract).",
                    "Investigate and prevent unlawful or harmful activities (Legitimate interests).",
                    "Facilitate financing, sale, merger, or reorganization (Legitimate interests).",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start before:content-[''] before:flex-shrink-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
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
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We may share Personal Information with:
                </p>
                <ul className="space-y-3 list-none">
                  {[
                    "Our corporate affiliates and associates (e.g., parent, subsidiaries, or other companies under common control).",
                    "Third-party service providers supporting the administration, provision, and marketing of our products, services, and the Sites.",
                    "Third parties as requested, directed, or consented to by you.",
                    "Companies that acquire or plan to acquire our company, business, or assets.",
                    "Our employees who need to know to help provide services or process information on our behalf.",
                    "Courts, governmental bodies, and legal authorities as required by law or legal process.",
                    "Relevant tax, payments, and customs authorities (which may share with authorities in other jurisdictions).",
                    "To prevent or respond to fraud, defend our websites against attacks, or protect the property and safety of Syslence, users, or the public.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start before:content-[''] before:flex-shrink-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:mt-2 before:mr-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>


              {/* Contact Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500 w-fit">Contact Syslence</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  If you have questions or concerns regarding how we use your Personal Information, please contact us at <a href="mailto:privacy@syslence.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium underline decoration-2 underline-offset-2 hover:decoration-blue-800 dark:hover:decoration-blue-300 transition-colors">privacy@syslence.com</a>. We are committed to working with you to obtain a fair resolution. If we cannot assist with your complaint or concern, you may have the right to contact your local data protection authority.
                </p>
              </div>

              {/* Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Looking for something else?
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Return to Home
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 