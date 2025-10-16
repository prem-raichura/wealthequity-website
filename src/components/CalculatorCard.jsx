import { motion } from 'framer-motion';

const CalculatorCard = ({ icon, title, description, onCalculateClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 text-center flex flex-col items-center"
    >
      <div className="text-4xl text-brand-green mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary-gray flex-grow mb-6">{description}</p>
      <button
        onClick={onCalculateClick}
        className="mt-auto bg-brand-green text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-all"
      >
        Calculate
      </button>
    </motion.div>
  );
};
export default CalculatorCard;