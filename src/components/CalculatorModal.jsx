import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const CalculatorModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // This outer div is the scrollable container
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-12 md:pt-4 md:items-center overflow-y-auto"
        >
          {/* This inner div is the modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevents clicks inside from closing
            className="relative w-full max-w-lg lg:max-w-5xl bg-gray-900/80 border border-gray-700 rounded-2xl shadow-2xl my-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-secondary-gray hover:text-white transition-colors z-10"
            >
              <HiX className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default CalculatorModal;