import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 -z-20 h-full w-full bg-dark-blue bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-white mb-6 font-poppins tracking-tight"
        >
          AI-Powered Web3
          <br />
          <span className="text-neon-purple">Intelligence Platform</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-light-slate mb-10"
        >
          Discover, track, and analyze crypto narratives faster with AI.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link to="features" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(106, 90, 205, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-purple text-brand-white font-bold px-10 py-4 rounded-lg text-lg transition-all"
            >
              Start Exploring
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <BrainCircuit size={120} className="text-neon-purple/30" strokeWidth={1} />
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center space-x-2 text-sm text-slate-500"
        >
          <Cpu size={16} />
          <span>Powered by GPT-AI Engine</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
