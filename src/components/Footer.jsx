// src/components/Footer.jsx
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img src={logo} className="h-14 mr-3" alt="WealthEquity Logo" />
            <p className="text-secondary-gray mt-4 max-w-xs">
              Empowering clients with the knowledge and resources for financial success.
            </p>
          </div>
          {/* Change grid-cols-3 to grid-cols-4 to make space */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-light-gray uppercase">Company</h2>
              <ul className="text-secondary-gray">
                <li className="mb-2"><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-light-gray uppercase">Connect</h2>
              <ul className="text-secondary-gray">
                <li className="mb-2"><a href="https://www.instagram.com/wealthequity/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/wealth-equity-91a14a27b/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
            {/* --- NEW COLUMN FOR DEMO LINKS --- */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-light-gray uppercase">Examples</h2>
              <ul className="text-secondary-gray">
                <li className="mb-2">
                  <Link to="/services/custom-financial-models" className="hover:underline">Service Detail</Link>
                </li>
                <li>
                  <Link to="/courses/financial-markets" className="hover:underline">Course Detail</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-secondary-gray sm:text-center">
            © {new Date().getFullYear()} WealthEquity™. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://wa.me/6354422959" target="_blank" rel="noreferrer" className="text-secondary-gray hover:text-brand-green">
                <FaWhatsapp />
            </a>
            <a href="mailto:wealtheqwork@gmail.com" className="text-secondary-gray hover:text-brand-green">
                <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;