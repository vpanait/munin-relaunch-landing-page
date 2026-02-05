import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Disclosures = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-30 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Important Disclosures</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investment Advisory Disclosures</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-yellow-800 font-medium">
                  <strong>Important:</strong> This information is for educational purposes only and should not be
                  considered as investment advice. Past performance does not guarantee future results.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Registration Status</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Caerus Vision Hub is a registered investment advisor with the Securities and Exchange Commission (SEC)
                and/or state securities regulators. Our registration does not imply a certain level of skill or training.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Fiduciary Duty</h3>
              <p className="text-gray-700 leading-relaxed">
                As a registered investment advisor, we have a fiduciary duty to act in your best interests.
                This means we must provide advice that is suitable for your individual circumstances and
                disclose any conflicts of interest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risk Disclosures</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">General Investment Risks</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Market Risk:</strong> Investment values fluctuate based on market conditions</li>
                <li><strong>Credit Risk:</strong> Risk that issuers may default on their obligations</li>
                <li><strong>Interest Rate Risk:</strong> Bond prices typically fall when interest rates rise</li>
                <li><strong>Inflation Risk:</strong> Purchasing power may decrease over time</li>
                <li><strong>Liquidity Risk:</strong> Some investments may be difficult to sell quickly</li>
                <li><strong>Concentration Risk:</strong> Over-concentration in specific sectors or securities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Alternative Investment Risks</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Higher volatility and potential for significant losses</li>
                <li>Limited liquidity and redemption restrictions</li>
                <li>Complex fee structures and expenses</li>
                <li>Limited regulatory oversight</li>
                <li>Potential for conflicts of interest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Disclosures</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Advisory Fees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our advisory fees are typically based on assets under management and may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Management fees (typically 0.50% - 2.00% annually)</li>
                <li>Performance-based fees (where applicable)</li>
                <li>Consultation fees for specific services</li>
                <li>Transaction fees for certain activities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Third-Party Fees</h3>
              <p className="text-gray-700 leading-relaxed">
                Additional fees may be charged by custodians, brokers, mutual funds, ETFs, and other
                third-party service providers. These fees are separate from our advisory fees and
                will be disclosed in your account statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conflicts of Interest</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Potential Conflicts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>We may receive compensation from third parties for recommending certain investments</li>
                <li>We may invest in the same securities we recommend to clients</li>
                <li>We may have business relationships with companies whose securities we recommend</li>
                <li>We may receive soft dollar benefits from brokers and other service providers</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain policies and procedures to identify, disclose, and manage conflicts of interest.
                When conflicts arise, we will either eliminate the conflict or disclose it to you and
                obtain your consent before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Custody and Safekeeping</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Client assets are typically held by qualified custodians, not by Caerus Vision Hub.
                This arrangement provides additional protection for your investments.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Custodian Information</h3>
              <p className="text-gray-700 leading-relaxed">
                We work with established custodians such as [Custodian Name] who are regulated by
                federal and state authorities and provide SIPC protection for securities accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Information</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Regulatory Filings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Form ADV Part 2A (Brochure) and Form ADV Part 2B (Brochure Supplement) contain
                detailed information about our advisory services, fees, and conflicts of interest.
                These documents are available upon request and can be found on the SEC's website.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Complaint Procedures</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have a complaint about our services, please contact us directly. You may also
                file a complaint with the SEC or your state securities regulator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tax Considerations</h2>
              <p className="text-gray-700 leading-relaxed">
                Investment decisions may have significant tax implications. We recommend consulting
                with a qualified tax advisor regarding the tax consequences of any investment strategy.
                We do not provide tax advice unless specifically engaged to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance Disclosures</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Performance Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any performance information presented represents past performance and is not indicative
                of future results. Performance data may not reflect the deduction of advisory fees
                and other expenses.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Benchmark Comparisons</h3>
              <p className="text-gray-700 leading-relaxed">
                When comparing performance to benchmarks, please note that benchmarks may not be
                appropriate for your specific investment objectives or risk tolerance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For additional information about investment advisors and investor protection, please visit:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Securities and Exchange Commission: <a href="https://www.sec.gov" className="text-blue-600 hover:underline">www.sec.gov</a></li>
                <li>Financial Industry Regulatory Authority: <a href="https://www.finra.org" className="text-blue-600 hover:underline">www.finra.org</a></li>
                <li>North American Securities Administrators Association: <a href="https://www.nasaa.org" className="text-blue-600 hover:underline">www.nasaa.org</a></li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclosures;
