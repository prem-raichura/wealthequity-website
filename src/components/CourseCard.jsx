// src/components/CourseCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CourseCard = ({ icon, title, description, callToAction, link }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
      className="group relative h-full bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-brand-green/70"
    >
      {/* Animated glow effect on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_farthest-side,rgba(0,180,0,0.1),rgba(0,180,0,0))] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-3xl text-brand-green mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-light-gray mb-3 flex-grow">{title}</h3>
        <p className="text-secondary-gray mb-8">{description}</p>
        <Link
          to={link || '/contact'}
          className="mt-auto bg-brand-green/10 text-brand-green font-bold py-3 px-6 rounded-full text-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          {callToAction}
          <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;