import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Bell, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <Search className="h-8 w-8 text-neon-purple" />,
    title: 'MetaSearch AI',
    description: 'Search for projects/tokens with automatically generated analysis and insights.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-neon-purple" />,
    title: 'Sentiment Tracking',
    description: 'Monitor market narratives and track shifts in sentiment across all platforms.',
  },
  {
    icon: <Bell className="h-8 w-8 text-neon-purple" />,
    title: 'Smart Alerts',
    description: 'Get notified in real-time about major Web3 events and critical market movers.',
  },
  {
    icon: <Users className="h-8 w-8 text-neon-purple" />,
    title: 'Community Insight',
    description: 'Discover opinions from top influencers and access premium community research.',
  },
];

const Features: React.FC = () => {
  const containerVariants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="features" className="py-20 sm:py-32 bg-dark-blue/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 font-poppins">Unlock the Power of AI</h2>
          <p className="text-lg text-light-slate">
            Our suite of tools is designed to give you a competitive edge in the fast-paced world of crypto.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-blue p-8 rounded-lg border border-transparent hover:border-neon-purple transition-colors duration-300 group"
            >
              <div className="mb-6 inline-block p-3 bg-dark-blue rounded-md">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-white mb-3">{feature.title}</h3>
              <p className="text-light-slate group-hover:text-brand-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
