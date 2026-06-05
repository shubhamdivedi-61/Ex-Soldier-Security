  import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/Services', label: 'Services ' },
    {path: '/Industries', label: 'Industries'},
    { path: '/About', label: 'Command Profile' },
    { path: '/Careers', label: 'Careers' },
    { path: '/Contact', label : 'Contact'}
  ];

  return (
    <nav className="frosted-navbar fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-white font-black tracking-tighter text-xl uppercase">
            EX. SOLDIER <span className="text-yellow-500">SECURITY</span>
          </span>
        </Link>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors duration-200 ${location.pathname === link.path ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="border border-yellow-500/40 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">Secure Desk</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl focus:outline-none">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#030a16]/95 backdrop-blur-md border-b border-yellow-500/20 px-6 py-6 space-y-4 uppercase text-sm font-bold tracking-wider flex flex-col">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-gray-300 py-2 border-b border-white/5">{link.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-yellow-500 pt-2 text-center border border-yellow-500/30 py-2 bg-yellow-500/10">Secure Desk</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;