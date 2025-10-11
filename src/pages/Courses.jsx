// src/pages/Courses.jsx
import AnimatedPage from '../components/AnimatedSection';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiLayers, FiBarChart2, FiAward } from 'react-icons/fi';

const coursesData = [
  {
    icon: <FiTrendingUp />,
    title: "Financial Markets",
    description: "Navigate the intricate web of securities markets, from primary offerings to secondary trading, with confidence.",
    callToAction: "Book a Demo"
  },
  {
    icon: <FiLayers />,
    title: "Derivatives Bootcamp",
    description: "Master Futures, Options, and Swaps. Learn risk management and create your own financial magic with payoff charts.",
    callToAction: "Become a Pro"
  },
  {
    icon: <FiBarChart2 />,
    title: "Technical Analysis",
    description: "Gain real-world exposure by analyzing stocks in live market conditions, using various tools and indicators.",
    callToAction: "Join the Game"
  },
  {
    icon: <FiAward />,
    title: "CFA Program Prep",
    description: "Prepare for one of the highest distinctions in investment management. Join our elite community.",
    callToAction: "Join the Elite"
  }
];

// Animation variants for staggering the cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const Courses = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Edu-Practical Courses</h1>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-16">
            Our courses are your ticket to a financial adventure, whether you're a budding investor or an aspiring analyst.
          </p>
        </motion.div>

        {/* Courses Grid Section */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {coursesData.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
              callToAction={course.callToAction}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Courses;