import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Bot, X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Features', to: 'features' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-blue/80 backdrop-blur-lg border-b border-slate-blue' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
            <Bot className="h-8 w-8 text-neon-purple" />
            <span className="ml-3 text-2xl font-bold text-brand-white font-poppins">CryptoInsight AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-light-slate hover:text-brand-white transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="pricing" smooth={true} duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-purple text-brand-white font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-blue/95 backdrop-blur-lg pb-4"
        >
          <div className="flex flex-col items-center space-y-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-light-slate hover:text-brand-white transition-colors cursor-pointer text-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link to="pricing" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-purple text-brand-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
