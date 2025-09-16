import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                Cookie Policy
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">
                Syslence Cookie Policy
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Policy Effective Date: March 15, 2025</p>
            </div>

            <div className="space-y-8">
              {/* Introduction Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Specialist Resources Global Inc. d/b/a Syslence Technologies and our affiliates and subsidiaries ("Syslence," "we," "us," or "our") are committed to protecting your privacy. This Cookie Policy explains how we and our partners use cookies and similar technologies.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We, our partners, and users of our services deploy cookies and similar technologies to record certain information, as well as the options you have as a data subject to control them.
                </p>
              </div>

              {/* What are Cookies Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-500 w-fit">What are Cookies?</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cookies are small pieces of data stored on your device when websites load in a browser. They help provide a consistent and efficient experience and perform essential functions like allowing users to register and remain logged in.
                </p>
              </div>

              {/* How We Use Cookies Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-500 w-fit">How We Use Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We use cookies to personalize content and ads, provide social media features, and analyze traffic. Some cookies are necessary for technical reasons; others enable personalization for visitors and registered users; and others support advertising from selected third-party networks. Where required by applicable data protection laws (including EU GDPR and India's Information Technology Act, 2000 as amended), we will request your consent for non-essential cookies.
                </p>
              </div>

              <h2>Where We Place Cookies</h2>
              <ul>
                <li>On our websites</li>
                <li>In administrative dashboards</li>
                <li>On sites we host for our users</li>
                <li>On sites that use our plugins</li>
                <li>In the emails we send</li>
              </ul>
              <p>
                Some cookies are placed by third-party services that appear on our pages. Your consent (where required) applies across our website via our consent banner.
              </p>

              {/* Categories of Cookies Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-500 w-fit">Categories of Cookies</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      Necessary/Required
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Essential for core site functions, authentication, and storing user preferences (e.g., language, region).</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      Analytics and Performance
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Help us understand how visitors use the site so we can improve it.</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      Advertising
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Set by us and our partners to deliver relevant content, assess effectiveness, and support retargeting across sites.</p>
                  </div>
                </div>
              </div>

              <h2>Types of Cookies Used</h2>
              <ul>
                <li><strong>Technical Cookies</strong>: Enable movement around the site and basic functionality, including remembering actions within a browsing session.</li>
                <li><strong>Analytical Cookies</strong>: Used by us or third parties to analyze usage and performance (e.g., determining location for localized content).</li>
                <li><strong>Functionality Cookies</strong>: Remember choices (e.g., language, region) to provide enhanced, more personalized features.</li>
                <li><strong>Advertising and Retargeting Cookies</strong>: Record interests and browsing paths to enable more relevant advertising, including retargeting by our partners.</li>
              </ul>

              <h2>Cookie Declaration</h2>
              <p>
                We use cookies to personalize content and ads, provide social media features, and analyze traffic. We may share information about your use of our site with social media, advertising, and analytics partners, who may combine it with other information you provide or they collect from your use of their services.
              </p>
              <p>
                The law allows us to store strictly necessary cookies on your device without consent. For all other types, we will seek your consent via our cookie banner where required by law. You can change or withdraw your consent at any time via the cookie preferences link in the footer (when implemented).
              </p>
              <p>
                Learn more about how we process personal data in our <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>

              <h2>How to Refuse or Withdraw Consent</h2>
              <p>
                If you do not want cookies placed on your device, set your preferences via our cookie banner (where available) or adjust your browser settings. You can also delete stored cookies via your browser. Below are general steps for common browsers (exact steps may vary by version):
              </p>

              <h3>Chrome</h3>
              <p>Preferences → Advanced → Privacy and security → Content settings → Cookies.</p>

              <h3>Mozilla Firefox</h3>
              <p>Preferences → Privacy & Security → Cookies and Site Data.</p>

              <h3>Microsoft Edge/Internet Explorer</h3>
              <p>Settings/Internet Options → Privacy → Cookies controls.</p>

              <h3>Safari</h3>
              <p>Preferences → Privacy → Cookies and website data.</p>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-500 w-fit">Contact Syslence</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  If you have any questions or comments about our Cookie Policy, please email <a href="mailto:privacy@syslence.com" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium underline decoration-2 underline-offset-2 hover:decoration-purple-800 dark:hover:decoration-purple-300 transition-colors">privacy@syslence.com</a>.
                </p>
              </div>

              {/* Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Looking for something else?
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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