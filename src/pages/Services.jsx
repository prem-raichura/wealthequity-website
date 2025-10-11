// src/pages/Services.jsx
import AnimatedPage from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBarChart2, FiFileText, FiCpu, FiMessageSquare } from 'react-icons/fi';

const servicesData = [
  { icon: <FiBriefcase />, title: 'Customized Financial Models', description: 'Meticulously crafted financial models combining thorough analysis with compelling visuals to assist traders and investors.' },
  { icon: <FiFileText />, title: 'Customised Company Profilers', description: 'Tailored presentations blending in-depth analysis with captivating visuals to empower investors on their journey.' },
  { icon: <FiBarChart2 />, title: 'Industry & Market Reports', description: 'Deeply researched weekly, quarterly, and annual reports with technical and fundamental analysis to make informed decisions.' },
  { icon: <FiCpu />, title: 'Trainings and Internship', description: 'We train young interns and provide personalized mentoring to shape their careers in the world of finance.' },
  { icon: <FiMessageSquare />, title: 'WE Bulletin', description: 'Stay updated with daily news and insights, ensuring you never miss a beat in the fast-paced financial world.' },
];

// This is the animation container for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const Services = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-16">
            We provide in-depth analysis, market intelligence, and customized research to help you make informed investment decisions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Services;