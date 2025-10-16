// src/pages/compliance/SEBICharterPage.jsx
import AnimatedSection from '../../components/AnimatedSection';
import { FiCheckCircle, FiXCircle, FiBriefcase, FiShield, FiFileText } from 'react-icons/fi';

const SEBICharterPage = () => {
  const dos = [
    "Always deal with SEBI registered Investment Advisers.",
    "Ensure that the Investment Adviser has a valid registration certificate.",
    "Check for SEBI registration number.",
    "Pay only advisory fees to your Investment Adviser through banking channels only.",
    "Always ask for your risk profiling before accepting investment advice.",
    "Ask all relevant questions and clear your doubts with your Investment Adviser.",
    "Assess the risk–return profile of the investment before making investments.",
    "Insist on getting the terms and conditions in writing.",
    "Be vigilant in your transactions.",
    "Approach the appropriate authorities for redressal of your doubts / grievances.",
    "Inform SEBI about Investment Advisers offering assured or guaranteed returns."
  ];

  const donts = [
    "Don’t fall for stock tips offered under the pretext of investment advice.",
    "Do not provide funds for investment to the Investment Adviser.",
    "Don’t fall for the promise of indicative or exorbitant or assured returns.",
    "Don’t fall prey to luring advertisements or market rumors.",
    "Avoid doing transactions only on the basis of phone calls or messages.",
    "Don’t take decisions just because of repeated messages and calls.",
    "Do not fall prey to limited period discount or other incentives.",
    "Don’t rush into making investments that do not match your risk taking appetite.",
    "Do not share login credential and password of your trading and demat accounts."
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg">
        <div className="absolute -top-40 -right-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -left-80 w-[30rem] h-[30rem] bg-gray-500/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <span className="text-brand-green font-semibold">COMPLIANCE</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">SEBI Investment Charter</h1>
          <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">
            Our commitment to investor protection, transparency, and financial wellness.
          </p>
        </AnimatedSection>
      </div>
      
      <div className="container mx-auto px-4 pb-16 md:pb-24 space-y-16">
        {/* Vision & Mission */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-3">Vision</h2>
              <p className="text-lg text-secondary-gray">Invest with knowledge & safety.</p>
            </div>
            <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-3">Mission</h2>
              <p className="text-lg text-secondary-gray">Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Business and Services Section */}
        <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/20 p-8 rounded-2xl border border-gray-800/50">
                    <div className="flex items-center gap-4 mb-4">
                        <FiBriefcase className="text-3xl text-brand-green" />
                        <h2 className="text-2xl font-bold">Business Transacted</h2>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-secondary-gray">
                        <li>Enter into a detailed agreement with the client.</li>
                        <li>Conduct proper and unbiased risk–profiling and suitability assessment.</li>
                        <li>Obtain KRA and CKYC registration.</li>
                        <li>Disclose company and registration details on the website.</li>
                        <li>Maintain records of all interactions where advice is discussed.</li>
                    </ul>
                </div>
                <div className="bg-gray-900/20 p-8 rounded-2xl border border-gray-800/50">
                    <div className="flex items-center gap-4 mb-4">
                        <FiFileText className="text-3xl text-brand-green" />
                        <h2 className="text-2xl font-bold">Services Provided</h2>
                    </div>
                     <ul className="list-disc list-inside space-y-2 text-secondary-gray">
                        <li>Complete client Onboarding including KYC and agreement sharing.</li>
                        <li>Provide full disclosure about business, affiliations, and compensation.</li>
                        <li>Offer investment advice based strictly on client risk-profiling.</li>
                        <li>Never access client’s personal accounts or holdings.</li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>

        {/* Grievance Redressal Mechanism */}
        <AnimatedSection>
            <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                    <FiShield className="text-3xl text-brand-green" />
                    <h2 className="text-3xl font-bold">Grievance Redressal Mechanism</h2>
                </div>
                <p className="text-secondary-gray mb-4">In case of any grievance, an investor should first approach us to ensure the grievance is resolved within 30 days.</p>
                <p className="text-secondary-gray">If the complaint is not redressed satisfactorily, you may lodge a complaint with SEBI on the centralized <a href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer" className="text-brand-green underline hover:text-green-400">SCORES portal</a> for timely redressal and status tracking.</p>
            </div>
        </AnimatedSection>

        {/* Do's and Don'ts Section */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-10">Expectations from Investors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/10 p-8 rounded-2xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Do's</h3>
              <div className="space-y-4">
                {dos.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                    <span className="text-light-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Don'ts</h3>
              <div className="space-y-4">
                {donts.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiXCircle className="text-red-400 text-xl mt-1 flex-shrink-0" />
                    <span className="text-light-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SEBICharterPage;