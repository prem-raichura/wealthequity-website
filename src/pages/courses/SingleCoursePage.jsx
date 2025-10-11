// src/pages/courses/SingleCoursePage.jsx
import AnimatedSection from '../../components/AnimatedSection';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FiClock, FiBarChart2, FiUser, FiLayers, FiChevronDown, FiBookOpen, FiEdit, FiShield, FiPlay } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// In a real app, this data would come from a database based on the URL's courseId
const staticCourseData = {
  title: "Derivatives Bootcamp",
  tagline: "Simplify the Magic of Risk and Rewards.",
  overview: "Dive into the thrilling realm of derivatives. This bootcamp answers all your burning questions: HOW do they work? WHY are they crucial? WHEN should you use them? We break down the complexities into bite-sized, easily digestible knowledge nuggets. No more confusion—just clear understanding.",
  curriculum: [
    { icon: <FiBookOpen />, title: "Module 1: Introduction to Derivatives", content: "Understanding the core concepts, types of derivatives, and their role in modern finance." },
    { icon: <FiLayers />, title: "Module 2: Futures & Forwards", content: "Deep dive into futures contracts, margin requirements, and hedging strategies." },
    { icon: <FiEdit />, title: "Module 3: Options & Payoffs", content: "Learn to create and interpret payoff charts for various option strategies." },
    { icon: <FiShield />, title: "Module 4: Risk Management", content: "Apply theoretical knowledge to practical, real-world risk management scenarios." }
  ],
  details: {
    level: "Intermediate",
    duration: "4 Weeks",
    instructor: "Expert Team"
  }
};

// --- REDESIGNED ACCORDION COMPONENT ---
const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 text-left transition-colors duration-300 hover:bg-gray-800/30 px-6"
      >
        <div className="flex-shrink-0 bg-brand-green/10 text-brand-green rounded-full w-10 h-10 flex items-center justify-center">
          {item.icon}
        </div>
        <span className="flex-grow font-semibold text-lg text-light-gray">{item.title}</span>
        <FiChevronDown className={`flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            {/* This padding aligns the text with the title */}
            <p className="pb-5 pt-1 px-6 ml-14 text-secondary-gray">{item.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SingleCoursePage = () => {
  let { courseId } = useParams(); // Gets the ID from the URL
  const course = staticCourseData;

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark-bg">
        <div className="absolute -top-40 -left-60 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 -right-80 w-[30rem] h-[30rem] bg-gray-500/5 rounded-full blur-3xl opacity-50 animate-pulse [animation-delay:2s]"></div>
      </div>
      
      {/* Hero Section */}
      <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <AnimatedSection>
          <span className="text-brand-green font-semibold">EDU-PRACTICAL COURSE</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">{course.title}</h1>
          <p className="text-xl text-secondary-gray mt-4 max-w-3xl mx-auto">{course.tagline}</p>
        </AnimatedSection>
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
              <p className="text-secondary-gray text-lg leading-relaxed">{course.overview}</p>
            </AnimatedSection>
            
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden">
                {course.curriculum.map((item, i) => <AccordionItem key={i} item={item} />)}
              </div>
            </AnimatedSection>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky top-24 h-fit">
            <AnimatedSection>
              <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-lg">
                <div className="group w-full aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <FiLayers className="text-6xl text-brand-green/50 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiPlay className="text-5xl text-white" />
                  </div>
                </div>
                <div className="space-y-4 border-t border-b border-gray-800 py-6">
                  <div className="flex items-center gap-4">
                    <FiBarChart2 className="text-2xl text-brand-green" />
                    <h4 className="text-lg text-light-gray">Level: <span className="font-semibold">{course.details.level}</span></h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <FiClock className="text-2xl text-brand-green" />
                    <h4 className="text-lg text-light-gray">Duration: <span className="font-semibold">{course.details.duration}</span></h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <FiUser className="text-2xl text-brand-green" />
                    <h4 className="text-lg text-light-gray">Instructor: <span className="font-semibold">{course.details.instructor}</span></h4>
                  </div>
                </div>
                <Link to="/contact" className="mt-6 block w-full bg-brand-green text-white font-bold py-3 px-6 rounded-full text-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,180,0,0.4)]">
                  Enroll Now
                </Link>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;