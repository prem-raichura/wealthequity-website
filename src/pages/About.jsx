// src/pages/About.jsx
import AnimatedPage from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiZap, FiPlusCircle, FiRepeat, FiAward } from 'react-icons/fi';

const About = () => {
  const principles = [
    { icon: <FiZap />, text: 'Train' },
    { icon: <FiPlusCircle />, text: 'Create' },
    { icon: <FiRepeat />, text: 'Innovate' },
    { icon: <FiAward />, text: 'Discover' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <AnimatedPage>
      <div className="relative min-h-screen container mx-auto px-4 py-16 flex items-center justify-center overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-brand-green/15 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-[30rem] h-[30rem] bg-gray-500/10 rounded-full blur-3xl opacity-70"></div>

        {/* Main Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              The Heart of <span className="text-brand-green">WealthEquity</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-lg text-secondary-gray max-w-3xl mx-auto"
            >
              We're more than analysts; we are architects of financial clarity, building bridges between knowledge and wealth.
            </motion.p> {/* CORRECTED TAG HERE */}
          </div>

          {/* Animated Divider */}
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t-2 border-gray-700/50 mb-10"
          />

          {/* Mission & Vision Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-12"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-3">
                <FiTarget className="text-3xl text-brand-green" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-secondary-gray">
                To empower our clients with the knowledge and resources they need for financial success, building literacy and confidence.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-3">
                <FiEye className="text-3xl text-brand-green" />
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-secondary-gray">
                To be a leader in wealth management and finance education, known for our innovative solutions and unwavering client commitment.
              </p>
            </motion.div>
          </motion.div>

          {/* Core Principles Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-light-gray mb-6">Our Core Principles</motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {principles.map((principle) => (
                <motion.div
                  key={principle.text}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 180, 0, 0.1)" }}
                  className="group bg-dark-bg/50 p-4 rounded-lg flex flex-col items-center justify-center border border-gray-700 hover:border-brand-green/70 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2 text-secondary-gray group-hover:text-brand-green transition-colors duration-300">
                    {principle.icon}
                  </div>
                  <span className="font-medium text-light-gray group-hover:text-white transition-colors duration-300">
                    {principle.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;