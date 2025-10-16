// src/pages/compliance/ODRPortalPage.jsx
import AnimatedSection from '../../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FiChevronRight, FiDownload } from 'react-icons/fi';

const LevelCard = ({ level, title, description, delay }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: delay * 0.2 }} className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-brand-green/10 text-brand-green rounded-full w-10 h-10 flex items-center justify-center mt-1"><FiChevronRight className="w-6 h-6" /></div>
    <div><h3 className="font-bold text-xl text-light-gray">{level} - {title}</h3><p className="text-secondary-gray">{description}</p></div>
  </motion.div>
);

const ODRPortalPage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg"><div className="absolute top-0 -right-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60"></div></div>
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Online Dispute Resolution (ODR) Portal</h1>
          <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">Navigating the Markets with Precision, Securing Your Financial Future.</p>
        </AnimatedSection>
      </div>
      <div className="container mx-auto px-4 pb-16 md:pb-24 space-y-16">
        <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl text-secondary-gray space-y-4 text-lg"><p>The Securities Exchange Board of India (“SEBI”) has introduced a common Online Dispute Resolution Portal (“ODR Portal”) to facilitate online resolution of disputes arising in the Indian Securities Market.</p></div>
                <div className="space-y-8"><LevelCard level="Level 1" title="Raise with the Intermediary" description="All complaints must first be lodged directly with the Intermediary's Compliance Officer at wealtheqwork@gmail.com." delay={0} /><LevelCard level="Level 2" title="SEBI SCORES" description="If the complaint remains unresolved, it may be lodged on SEBI's SCORES platform." delay={1} /><LevelCard level="Level 3" title="ODR Platform" description="If still unsatisfied, the ODR process can be initiated through the ODR portal." delay={2} /></div>
            </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-6">Important Notes</h2>
                <ul className="list-disc list-inside space-y-4 text-secondary-gray"><li>ODR portal can be initiated only if the complaint is not pending before any court, tribunal or consumer forum.</li><li>ODR Portal Link: <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-brand-green underline hover:text-green-400">https://smartodr.in/login</a></li></ul>
                <div className="mt-8"><a href="#" className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300"><FiDownload /> Download Master Circular</a></div>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default ODRPortalPage;