import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                Terms & Conditions
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">
                Syslence Terms of Service
              </h1>
              <p className="text-gray-600 dark:text-gray-300">India-focused legal policy</p>
            </div>

            <div className="space-y-8">
              {/* Intro */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-100 dark:border-green-800">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Welcome to Syslence. By accessing or using our website and services,
                  you agree to comply with and be bound by these Terms & Conditions.
                  Please read them carefully before continuing.
                </p>
              </div>

              {/* Sections */}
              {[
                {
                  title: "1. Use of Services",
                  text: "You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. Unauthorized use of our website may give rise to claims for damages and/or be a criminal offense."
                },
                {
                  title: "2. Intellectual Property",
                  text: "All content, trademarks, logos, and other intellectual property displayed on the website are owned by Syslence or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent."
                },
                {
                  title: "3. User Accounts",
                  text: "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately if you suspect unauthorized access."
                },
                {
                  title: "4. Limitation of Liability",
                  text: "Syslence is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or services. Use of the website is at your own risk."
                },
                {
                  title: "5 Termination",
                  text: "We reserve the right to suspend or terminate your access to the website at our discretion, without prior notice, if you violate these Terms & Conditions."
                },
                {
                  title: "6. Governing Law",
                  text: "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts."
                },
                {
                  title: "7.Changes to Terms",
                  text: "We may update these Terms & Conditions from time to time. Continued use of the website after updates constitutes acceptance of the revised terms."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-green-500 w-fit">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}

              {/* Contact */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-100 dark:border-green-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-green-500 w-fit">
                  Contact Syslence
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  If you have any questions about these Terms & Conditions, please
                  contact us at{" "}
                  <a
                    href="mailto:support@syslence.com"
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium underline decoration-2 underline-offset-2 hover:decoration-green-800 dark:hover:decoration-green-300 transition-colors"
                  >
                    support@syslence.com
                  </a>
                  .
                </p>
              </div>

              {/* Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Looking for something else?
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Return to Home
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
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
