import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-300 border inline-block text-center";
  
  const variants = {
    primary: "bg-gold border-gold text-darkBg hover:bg-transparent hover:text-gold shadow-lg shadow-gold/20",
    secondary: "bg-transparent border-white text-white hover:bg-white hover:text-darkBg",
    outlineGold: "bg-transparent border-gold text-gold hover:bg-gold hover:text-darkBg"
  };

  const computedStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={computedStyle}>{children}</Link>;
  }

  return <button onClick={onClick} className={computedStyle}>{children}</button>;
};

export default Button;