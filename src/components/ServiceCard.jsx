// src/components/ServiceCard.jsx
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

// This is an animation variant for staggering children
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative p-8 h-full overflow-hidden rounded-xl bg-dark-bg border border-gray-800
                 hover:border-brand-green/50 transition-all duration-300"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-dark-bg to-dark-bg"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 text-brand-green bg-brand-green/10 rounded-lg w-14 h-14 flex items-center justify-center text-3xl">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-light-gray mb-3">{title}</h3>
        <p className="text-secondary-gray mb-6 flex-grow">{description}</p>
        <div>
          <span
            className="text-brand-green font-semibold inline-flex items-center"
          >
            Learn More
            <BsArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;