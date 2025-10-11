// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FaChartLine, FaBookOpen, FaBullseye } from 'react-icons/fa';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="space-y-24 md:space-y-32 pb-20">
        {/* Hero Section */}
        <section className="text-center pt-20 md:pt-32">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-light-gray leading-tight"
            >
              Wealth
              <span className="text-brand-green">Equity</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-secondary-gray max-w-3xl mx-auto"
            >
              Nexus of Knowdledge and Investment
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Link to="/services" className="bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link to="/courses" className="bg-gray-700 text-light-gray font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                View Courses
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section with Staggering */}
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { icon: <FaChartLine />, title: "Expert Analysis", text: "Deeply researched market reports with both technical and fundamental analysis to help you make informed decisions." },
              { icon: <FaBookOpen />, title: "Edu-Practical Courses", text: "Upskill your career with hands-on courses designed for young finance learners and aspiring professionals." },
              { icon: <FaBullseye />, title: "Personalized Mentoring", text: "We train young interns and provide personalized mentoring to shape their careers in the world of finance." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                className="bg-gray-900/50 p-8 rounded-lg"
              >
                <div className="text-brand-green text-4xl mx-auto mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-gray">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="container mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
           <div className="bg-brand-green/10 p-10 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Let's Have a Talk About Your Future</h2>
              <p className="text-secondary-gray mb-6 max-w-2xl mx-auto">
                  Ready to take control of your financial journey? Our team is here to help you build a prosperous future.
              </p>
              <Link to="/contact" className="bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Link>
           </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Home;