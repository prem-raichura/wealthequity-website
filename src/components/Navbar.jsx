import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isMobileComplianceOpen, setIsMobileComplianceOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'About', path: '/about' },
    {
      name: 'Compliance',
      isDropdown: true,
      subLinks: [
        { name: 'SEBI Investment Charter', path: '/compliance' },
        { name: 'SEBI Complaints', path: '/sebi-complaints' },
        { name: 'ODR Portal', path: '/odr-portal' },
        { name: 'Grievance Redresal', path: '/grievance-redressal' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileLinkVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 }
  };

  const mobileDropdownVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
      },
    },
    closed: {
      clipPath: "inset(10% 0% 90% 0%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0"><img className="h-12 w-auto" src={logo} alt="WealthEquity Logo" /></NavLink>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => link.isDropdown ? (
              <div key={link.name} className="relative" onMouseEnter={() => setIsComplianceOpen(true)} onMouseLeave={() => setIsComplianceOpen(false)}>
                <button className="px-3 py-2 flex items-center gap-1 rounded-md text-sm font-medium text-light-gray hover:text-brand-green transition-colors duration-300">
                  {link.name}<FiChevronDown className={`transition-transform duration-300 ${isComplianceOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isComplianceOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg">
                      <div className="py-2">{link.subLinks.map((subLink) => (<NavLink key={subLink.name} to={subLink.path} onClick={() => setIsComplianceOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-light-gray hover:bg-brand-green/10 hover:text-brand-green">{subLink.name}</NavLink>))}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (<NavLink key={link.name} to={link.path} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-light-gray hover:text-brand-green'}`}>{link.name}</NavLink>))}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"><span className="sr-only">Open main menu</span>{isMobileOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => link.isDropdown ? (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <button onClick={() => setIsMobileComplianceOpen(!isMobileComplianceOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-light-gray hover:text-brand-green hover:bg-gray-800">
                    {link.name}<FiChevronDown className={`transition-transform duration-300 ${isMobileComplianceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileComplianceOpen && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="pl-4 mt-1 space-y-1"
                      >
                        {link.subLinks.map(subLink => (
                          <motion.div key={subLink.name} variants={mobileLinkVariants}>
                            <NavLink to={subLink.path} onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-secondary-gray hover:text-brand-green hover:bg-gray-800">{subLink.name}</NavLink>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (<motion.div key={link.name} variants={mobileLinkVariants}><NavLink to={link.path} onClick={() => setIsMobileOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'text-brand-green bg-gray-900' : 'text-light-gray hover:text-brand-green hover:bg-gray-800'}`}>{link.name}</NavLink></motion.div>))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;