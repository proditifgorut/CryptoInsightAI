import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, BarChart } from 'lucide-react';

const About: React.FC = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <section id="about" className="py-20 sm:py-32">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 font-poppins">One Dashboard, Infinite Insights</h2>
          <p className="text-lg text-light-slate">
            CryptoInsight AI gathers thousands of Web3 sources—from research and podcasts to governance forums and social media—and presents them in a single, easy-to-understand dashboard.
          </p>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="p-4 bg-slate-blue rounded-full mb-4">
              <Database className="h-10 w-10 text-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">Input Sources</h3>
            <p className="text-light-slate">Raw data from across Web3</p>
          </div>
          
          <div className="hidden md:block text-neon-purple/50">
            <svg width="100%" height="40">
              <line x1="0" y1="20" x2="100%" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="5, 5" />
            </svg>
          </div>
          <div className="md:hidden text-neon-purple/50 rotate-90 my-4">
            <svg width="40" height="40">
              <line x1="20" y1="0" x2="20" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="5, 5" />
            </svg>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-slate-blue rounded-full mb-4">
              <Brain className="h-10 w-10 text-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">AI Analysis</h3>
            <p className="text-light-slate">Processing and pattern recognition</p>
          </div>

          <div className="hidden md:block text-neon-purple/50">
             <svg width="100%" height="40">
              <line x1="0" y1="20" x2="100%" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="5, 5" />
            </svg>
          </div>
           <div className="md:hidden text-neon-purple/50 rotate-90 my-4">
            <svg width="40" height="40">
              <line x1="20" y1="0" x2="20" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="5, 5" />
            </svg>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-slate-blue rounded-full mb-4">
              <BarChart className="h-10 w-10 text-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">Actionable Insights</h3>
            <p className="text-light-slate">Clear, concise intelligence</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
