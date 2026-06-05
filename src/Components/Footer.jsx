import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
            Ex Soldier Security
          </h3>
          <p className="leading-relaxed">
            Premium corporate and tactical asset protection. Engineered and
            deployment-focused protocols managed exclusively by seasoned
            military veterans.
          </p>
        </div>
        <div>
          <h4 className="text-gold font-semibold uppercase tracking-wider mb-4">
            Quick Navigation
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="hover:text-white transition">
              About Deployment
            </Link>
            <Link to="/services" className="hover:text-white transition">
              Tactical Services
            </Link>
            <Link to="/industries" className="hover:text-white transition">
              Industries Guarded
            </Link>
            <Link to="/careers" className="hover:text-white transition">
              Recruitment
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-gold font-semibold uppercase tracking-wider mb-4">
            Contact HQ
          </h4>
          <p className="mb-2">
            📍Shop Number 74 Basement ,Lekhraj Gold Plaze,Near Munshipulia
            Police Station,Indira Nagar , Luucknow (UP), pin 226016
          </p>
          <p className="mb-2">📞 7897149596,8400431866 (24/7 Hotline)</p>
          <p>✉️exsoldier270@gmail.com </p>
        </div>
        <div>
          <h4 className="text-gold font-semibold uppercase tracking-wider mb-4">
            Security Credentials
          </h4>
          <p className="italic bg-white/5 p-3 border-l-2 border-gold text-xs leading-normal">
            "Fully licensed, highly insured, and rigorously regulated agency
            staffed purely by certified ex-military personnel."
          </p>
        </div>
      </div>
      <div className="bg-darkBg py-4 border-t border-white/5 text-center text-xs">
        &copy; {new Date().getFullYear()} Ex Soldier Security. All Tactical
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
