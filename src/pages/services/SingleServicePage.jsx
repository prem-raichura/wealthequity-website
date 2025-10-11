// src/pages/services/SingleServicePage.jsx
import AnimatedSection from '../../components/AnimatedSection';
import { useParams, Link } from 'react-router-dom';
import { FiCheckCircle, FiTrendingUp, FiFileText, FiCpu, FiMessageCircle, FiClipboard, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

// In a real app, this data would come from a database based on the URL's serviceId
const staticServiceData = {
  title: "Customised Financial Models",
  tagline: "From Raw Data to Actionable Insights.",
  overview: "We offer meticulously crafted financial models that combine thorough analysis with compelling visuals to assist potential traders or investors. Our reports are designed not only to provide comprehensive financial analysis but also to captivate potential stakeholders with a visually appealing format.",
  features: [
    "Simplified Financial Statements (Income, Balance Sheet, Cash Flow)",
    "In-depth Ratio Analysis with graphical representation",
    "Relative Valuations (P/E, P/B ratios)",
    "Discounted Cash Flow (DCF) Projections",
    "Identification of Revenue and Cost Drivers"
  ],
  process: [
    { icon: <FiMessageCircle />, title: "1. Consultation", description: "We start with a call to understand your specific needs and objectives." },
    { icon: <FiClipboard />, title: "2. Data Analysis", description: "Our team gathers and analyzes all relevant financial data and market trends." },
    { icon: <FiZap />, title: "3. Model Creation", description: "We build your bespoke financial model with precision and clarity." },
    { icon: <FiTrendingUp />, title: "4. Delivery & Briefing", description: "You receive the model and a detailed walkthrough from our analysts." }
  ]
};

const SingleServicePage = () => {
  let { serviceId } = useParams(); // Gets the ID from the URL
  const service = staticServiceData;

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg">
        <div className="absolute -top-40 -right-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-2/3 -left-80 w-[30rem] h-[30rem] bg-gray-500/5 rounded-full blur-3xl opacity-50 animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <span className="text-brand-green font-semibold">SERVICE DETAIL</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">{service.title}</h1>
          <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">{service.tagline}</p>
        </AnimatedSection>
      </div>
      
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Service Overview</h2>
              <p className="text-secondary-gray text-lg leading-relaxed">{service.overview}</p>
            </AnimatedSection>
            
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl"
                  >
                    <div className="text-3xl text-brand-green mb-3">{step.icon}</div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-secondary-gray text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky top-24 h-fit">
            <AnimatedSection>
              <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Key Features Included</h3>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-brand-green text-lg mt-1 flex-shrink-0" />
                      <span className="text-light-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 block w-full bg-brand-green text-white font-bold py-3 px-6 rounded-full text-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,180,0,0.4)]">
                  Enquire Now
                </Link>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;