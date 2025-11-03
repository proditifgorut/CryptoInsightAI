import React from 'react';
import { Bot } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Bot className="h-6 w-6 text-neon-purple" />
            <span className="ml-2 text-light-slate">
              © 2025 CryptoInsight AI — All Rights Reserved
            </span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-light-slate hover:text-brand-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-light-slate hover:text-brand-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
