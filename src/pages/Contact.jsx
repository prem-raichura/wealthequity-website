// src/pages/Contact.jsx
import AnimatedPage from '../components/AnimatedSection';
import { useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | WealthEquity';
  }, []);
  // Animation variants for staggering items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };
  
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contactDetails = [
    { icon: <FaWhatsapp />, text: "WhatsApp", href: "https://wa.me/6354422959" },
    { icon: <MdEmail />, text: "Email", href: "mailto:wealtheqwork@gmail.com" },
    { icon: <FaLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/wealth-equity-91a14a27b/" },
    { icon: <FaInstagram />, text: "Instagram", href: "https://www.instagram.com/wealthequity/" }
  ];

  return (
    <AnimatedPage>
      <div className="relative min-h-screen container mx-auto px-4 py-16 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-green/20 rounded-full blur-3xl animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Your Future</h1>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-12">
            Reach out through any platform below, or send us a message directly. We're ready to connect.
          </p>
        </motion.div>

        {/* Glassmorphism Container */}
        <div className="relative z-10 w-full max-w-5xl bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Side: Contact Methods */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                {contactDetails.map((detail, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={detail.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-dark-bg/50 p-4 rounded-lg flex flex-col items-center justify-center text-center
                               border border-gray-700 hover:border-brand-green hover:bg-dark-bg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2 text-secondary-gray group-hover:text-brand-green transition-colors">{detail.icon}</div>
                    <span className="text-light-gray font-medium group-hover:text-white transition-colors">{detail.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-gray mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-transparent border-b-2 border-gray-600 text-light-gray focus:outline-none focus:border-brand-green transition-colors py-2" required />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-gray mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-transparent border-b-2 border-gray-600 text-light-gray focus:outline-none focus:border-brand-green transition-colors py-2" required />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-gray mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full bg-transparent border-b-2 border-gray-600 text-light-gray focus:outline-none focus:border-brand-green transition-colors py-2" required></textarea>
              </motion.div>
              <motion.div variants={formItemVariants}>
                <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,180,0,0.4)]">
                  Send Message
                </button>
              </motion.div>
            </motion.form>

          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;