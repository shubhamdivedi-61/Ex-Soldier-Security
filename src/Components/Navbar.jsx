  import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './UI/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-dark/95 backdrop-blur-md border-b border-gold/20 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center font-bold text-lg bg-navy tracking-tighter text-white">
            ESS
          </div>
          <span className="font-extrabold tracking-wider text-xl uppercase text-white">Ex Soldier <span className="text-gold">Security</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm uppercase tracking-widest font-semibold transition-colors duration-200 relative pb-1 ${location.pathname === link.path ? 'text-gold' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
              {location.pathname === link.path && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold" />}
            </Link>
          ))}
          <Button to="/contact" variant="outlineGold" className="py-2 px-4 text-xs">Get Quote</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-navy-dark border-b border-gold/20 flex flex-col p-6 gap-4 shadow-2xl lg:hidden">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-base uppercase tracking-widest font-medium py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-gold' : 'text-gray-300'}`}>
                {link.name}
              </Link>
            ))}
            <Button to="/contact" variant="primary" className="w-full mt-2">Get Free Quote</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;