import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-30 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the services provided by Caerus Vision Hub ("Company," "we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. If you do not agree 
                to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Caerus Vision Hub provides financial advisory services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Investment portfolio management and advisory services</li>
                <li>Financial planning and wealth management</li>
                <li>Retirement planning and consultation</li>
                <li>Tax planning and optimization strategies</li>
                <li>Risk assessment and management</li>
                <li>Educational resources and market insights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete financial information</li>
                <li>Notify us promptly of any material changes in your financial situation</li>
                <li>Follow our investment recommendations and strategies</li>
                <li>Pay all applicable fees and charges in a timely manner</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain confidentiality of account information and passwords</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Investment Advisory Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our investment advisory services are provided on a fiduciary basis, meaning we are obligated to act 
                in your best interests. However, please note:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Past performance does not guarantee future results</li>
                <li>All investments carry risk of loss</li>
                <li>We cannot guarantee specific investment outcomes</li>
                <li>Market conditions may affect investment performance</li>
                <li>You should carefully consider your risk tolerance before investing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our fee structure includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Management fees based on assets under management</li>
                <li>Consultation fees for advisory services</li>
                <li>Transaction fees for certain investment activities</li>
                <li>Additional fees for specialized services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All fees are disclosed in advance and detailed in your client agreement. Payment terms and methods 
                will be specified in your individual service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, Caerus Vision Hub shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind. We disclaim 
                all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of information</li>
                <li>Warranties that our services will be uninterrupted or error-free</li>
                <li>Warranties regarding the security of our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict confidentiality regarding your personal and financial information. We will not 
                disclose your information to third parties except as required by law, regulation, or with your 
                explicit consent. This obligation survives termination of our relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate the advisory relationship at any time with written notice. Upon termination, 
                we will provide you with a final account statement and return any remaining funds in accordance with 
                applicable regulations and your instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Regulatory Compliance</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided in compliance with applicable federal and state securities laws and regulations. 
                We are registered investment advisors subject to oversight by the Securities and Exchange Commission 
                and/or state regulatory authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of [Your State/Jurisdiction], 
                without regard to its conflict of law provisions. Any disputes arising from these terms shall be 
                resolved in the courts of [Your State/Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of any material changes 
                and post the updated terms on our website. Your continued use of our services after such changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
