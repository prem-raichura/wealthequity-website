import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import CalculatorPage from './pages/CalculatorPage';
import SingleServicePage from './pages/services/SingleServicePage';
import SingleCoursePage from './pages/courses/SingleCoursePage';
import SEBICharterPage from './pages/compliance/SEBICharterPage';
import SEBIComplaintsPage from './pages/compliance/SEBIComplaintsPage';
import ODRPortalPage from './pages/compliance/ODRPortalPage';
import GrievanceRedressalPage from './pages/compliance/GrievanceRedressalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compliance" element={<SEBICharterPage />} />
            <Route path="/sebi-complaints" element={<SEBIComplaintsPage />} />
            <Route path="/odr-portal" element={<ODRPortalPage />} />
            <Route path="/grievance-redressal" element={<GrievanceRedressalPage />} />
            <Route path="/services/:serviceId" element={<SingleServicePage />} />
            <Route path="/courses/:courseId" element={<SingleCoursePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;