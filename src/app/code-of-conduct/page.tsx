import Link from "next/link";

export default function CodeOfConductPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                Code of Conduct
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">
                Syslence Standards of Conduct and Discipline
              </h1>
              <p className="text-gray-600 dark:text-gray-300">India-focused policy</p>
            </div>

            <div className="space-y-8">
              {/* Introduction Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-100 dark:border-green-800">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  All employees are responsible for knowing and abiding by Syslence&#39;s rules and policies. Syslence prides itself on meeting high standards of ethical and personal conduct across its operations in India and globally. You are expected to maintain the highest ethical standards and perform your duties in good faith and to the best of your abilities at all times when engaged in Syslence business.
                </p>
              </div>

              {/* Discipline Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-green-500 w-fit">Discipline</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Syslence&#39;s discretion, employees may be disciplined or terminated for violating any policy or rule. Syslence may discipline or terminate employees for engaging in any conduct it deems inappropriate. Employees are expected to use good judgment in all actions and consult supervisors or Human Resources if there is any doubt as to whether intended conduct aligns with Syslence standards.
                </p>
              </div>

              {/* Gifts Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-green-500 w-fit">Giving and Accepting Gifts</h2>
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-6 border border-amber-200 dark:border-amber-800 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Guidelines</h3>
                      <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                        When in doubt, consult Human Resources and notify management if you receive a gift of more than nominal value.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may not give or accept gifts, services, entertainment, or favors, from any competitor, client, customer, supplier, government entity, or other organization in connection with your relationship with Syslence in exchange for preferential treatment. However, employees may accept gifts that are lawful, customary, of nominal value, and compliant with applicable Indian laws and regulations, subject to prior authorization where required. For example, meals and refreshments of nominal value given in connection with business activities may be acceptable.
                </p>
              </div>

              <div className="max-w-4xl mx-auto p-6 space-y-6">
                {/* Reporting Concerns Box */}
                <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Reporting Concerns</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you believe you have been subjected to conduct that violates this policy, report the matter immediately to any manager.
                    If you cannot contact a manager or do not receive a satisfactory response within five (5) business days, contact the Human Resources Department.
                    If the person toward whom the complaint is directed is one of the above, escalate to any higher-level manager in your reporting hierarchy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Every report of perceived harassment or misconduct will be fully investigated and corrective action will be taken where appropriate.
                    Violations of this policy may result in disciplinary action, up to and including discharge.
                  </p>
                </section>

                {/* Confidentiality and Non-Retaliation Box */}
                <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Confidentiality and Non-Retaliation</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All harassment complaints will be kept confidential to the extent possible, consistent with the need to investigate.
                    Syslence prohibits retaliation against individuals who report concerns in good faith or who cooperate in investigations.
                    Employees who make complaints in bad faith may be subject to disciplinary action, up to and including discharge.
                    All employees must cooperate with investigations.
                  </p>
                </section>

                {/* Compliance with Indian Law Box */}
                <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Compliance with Indian Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This Code of Conduct is intended to align with applicable Indian labor and employment laws and regulations.
                    Where specific procedures or standards are mandated by law (for example, under the POSH Act regarding prevention of sexual harassment),
                    Syslence will follow those legal requirements. Additional local policies and procedures may apply.
                  </p>
                </section>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-100 dark:border-green-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-green-500 w-fit">Contact Syslence</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Questions about this Code of Conduct may be directed to Human Resources or to <a href="mailto:privacy@syslence.com" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium underline decoration-2 underline-offset-2 hover:decoration-green-800 dark:hover:decoration-green-300 transition-colors">privacy@syslence.com</a> for policy-related queries.
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
