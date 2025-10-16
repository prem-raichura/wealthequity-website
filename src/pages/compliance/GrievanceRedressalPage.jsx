// src/pages/compliance/GrievanceRedressalPage.jsx
import AnimatedSection from '../../components/AnimatedSection';

const Td = ({ children, className = '' }) => <td className={`border border-gray-700 px-4 py-3 ${className}`}>{children}</td>;
const Th = ({ children, className = '' }) => <th className={`border border-gray-700 px-4 py-3 bg-gray-800/50 font-semibold text-left ${className}`}>{children}</th>;

const GrievanceRedressalPage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg"><div className="absolute bottom-0 -left-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60"></div></div>
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Grievance Redressal Mechanism</h1>
        </AnimatedSection>
      </div>
      <div className="container mx-auto px-4 pb-16 md:pb-24 space-y-16">
        <AnimatedSection>
            <div className="max-w-4xl mx-auto text-secondary-gray space-y-4 text-lg bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                <p className="font-bold text-light-gray">Dear Investor,</p>
                <p>In case of any grievance / complaint, please contact our Compliance Officer, Ajay Sharma:</p>
                <ul className="list-disc list-inside pl-4"><li>Email: <a href="mailto:ajay.sharma@example.com" className="text-brand-green">ajay.sharma@example.com</a></li><li>Phone: <a href="tel:+919866243862" className="text-brand-green">+91 9866243862</a></li></ul>
                <p>If not satisfied, you can lodge your grievance with SEBI at <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-green">http://scores.gov.in</a> or use the ODR mechanism at <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-brand-green">www.smartodr.in</a>.</p>
            </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="overflow-x-auto max-w-5xl mx-auto">
                <table className="w-full text-left border-collapse">
                    <thead><tr><Th>Designation</Th><Th>Contact Person</Th><Th>Address</Th><Th>Contact No.</Th><Th>Email-ID</Th><Th>Working Hours</Th></tr></thead>
                    <tbody><tr><Td>Compliance Officer</Td><Td>Ajay Sharma</Td><Td>Same as registered</Td><Td>9866243862</Td><Td>info@example.com</Td><Td>10AM-4PM</Td></tr><tr><Td>CEO</Td><Td>Ajay Sharma</Td><Td>Same as registered</Td><Td>9866243862</Td><Td>info@example.com</Td><Td>10AM-4PM</Td></tr></tbody>
                </table>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default GrievanceRedressalPage;