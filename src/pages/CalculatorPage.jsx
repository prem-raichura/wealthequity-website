import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import CalculatorCard from '../components/CalculatorCard';
import CalculatorModal from '../components/CalculatorModal';
import SIPCalculator from './calculators/SIPCalculator';
import FDCalculator from './calculators/FDCalculator';
import InflationCalculator from './calculators/InflationCalculator';
import MutualFundCalculator from './calculators/MutualFundCalculator';
import { FiTrendingUp, FiLock, FiRepeat, FiBarChart2 } from 'react-icons/fi';

const calculatorData = [
  { id: 'sip', icon: <FiTrendingUp />, title: 'SIP Calculator', description: 'Plan your Systematic Investment Plan (SIP) to achieve your financial goals.' },
  { id: 'fd', icon: <FiLock />, title: 'FD Calculator', description: 'Calculate the maturity amount and interest for your Fixed Deposits.' },
  { id: 'inflation', icon: <FiRepeat />, title: 'Inflation Calculator', description: 'Understand the future value of your money after accounting for inflation.' },
  { id: 'mf', icon: <FiBarChart2 />, title: 'Mutual Fund Calculator', description: 'Estimate the returns on your lumpsum or SIP mutual fund investments.' },
];

const CalculatorPage = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'sip': return <SIPCalculator />;
      case 'fd': return <FDCalculator />;
      case 'inflation': return <InflationCalculator />;
      case 'mf': return <MutualFundCalculator />;
      default: return null;
    }
  };

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg"><div className="absolute top-0 -left-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60"></div></div>
        <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Financial Calculators</h1>
            <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">Tools to help you plan your investments and secure your financial future.</p>
          </AnimatedSection>
        </div>
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {calculatorData.map((calc) => (
              <CalculatorCard key={calc.id} icon={calc.icon} title={calc.title} description={calc.description} onCalculateClick={() => setActiveCalculator(calc.id)} />
            ))}
          </div>
        </div>
      </div>
      <CalculatorModal isOpen={!!activeCalculator} onClose={() => setActiveCalculator(null)}>
        {activeCalculator && renderCalculator()}
      </CalculatorModal>
    </>
  );
};
export default CalculatorPage;