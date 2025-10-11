// src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-12 w-auto" src={logo} alt="WealthEquity Logo" />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-brand-green' : 'text-light-gray hover:text-brand-green'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-green bg-gray-900' : 'text-light-gray hover:text-brand-green hover:bg-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;