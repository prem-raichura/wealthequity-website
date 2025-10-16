// src/pages/compliance/SEBIComplaintsPage.jsx
import AnimatedSection from '../../components/AnimatedSection';

const Td = ({ children, className = '' }) => <td className={`border border-gray-700 px-4 py-3 ${className}`}>{children}</td>;
const Th = ({ children, className = '' }) => <th className={`border border-gray-700 px-4 py-3 bg-gray-800/50 font-semibold ${className}`}>{children}</th>;

const SEBIComplaintsPage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg"><div className="absolute top-0 -left-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60"></div></div>
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">SEBI Complaints</h1>
          <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">Navigating the Mechanism with Diligence, Securing Your Financial Future.</p>
        </AnimatedSection>
      </div>
      <div className="container mx-auto px-4 pb-16 md:pb-24 space-y-16">
        <AnimatedSection>
            <div className="max-w-4xl mx-auto text-secondary-gray space-y-4 text-lg bg-gray-900/40 p-8 rounded-2xl border border-gray-800"><p>Data of complaints of clients against the Investment Adviser (IA) is being disclosed on the website of the IA on a monthly basis, as per the prescribed format.</p></div>
        </AnimatedSection>
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-8">Data For Month Ending - September 2025</h2>
            <div className="overflow-x-auto"><table className="w-full max-w-4xl mx-auto text-center border-collapse"><thead><tr><Th>Sr. No.</Th><Th>Received From</Th><Th>Pending at beginning</Th><Th>Received</Th><Th>Resolved</Th><Th>Total Pending</Th><Th>Pending &gt; 3m</Th><Th>Avg. Resolution Time</Th></tr></thead><tbody><tr><Td>1</Td><Td>Directly from Investors</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>N.A.</Td></tr><tr><Td>2</Td><Td>SEBI (SCORES)</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>N.A.</Td></tr><tr className="font-bold bg-gray-900/40"><Td>3</Td><Td>Grand Total</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>N.A.</Td></tr></tbody></table></div>
        </AnimatedSection>
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-8">Historical Monthly Complaints</h2>
            <div className="overflow-x-auto"><table className="w-full max-w-4xl mx-auto text-center border-collapse"><thead><tr><Th>Sr. No.</Th><Th>Month</Th><Th>Carried Forward</Th><Th>Received</Th><Th>Resolved</Th><Th>Pending</Th></tr></thead><tbody><tr><Td>1</Td><Td>Apr-25</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td></tr><tr><Td>2</Td><Td>May-25</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td></tr><tr className="font-bold bg-gray-900/40"><Td colSpan="2">Grand Total</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td></tr></tbody></table></div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default SEBIComplaintsPage;