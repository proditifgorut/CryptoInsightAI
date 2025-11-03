import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free Plan',
    price: '$0',
    frequency: '',
    description: 'For individuals starting their crypto journey.',
    features: ['5 searches per day', 'Basic sentiment analysis', 'Limited alerts'],
    isPopular: false,
  },
  {
    name: 'Pro Plan',
    price: '$29',
    frequency: '/mo',
    description: 'For serious investors and researchers.',
    features: ['Unlimited MetaSearch', 'Full Sentiment Tracking', 'Real-time Smart Alerts', 'Community Insight Access'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'For funds, protocols, and large organizations.',
    features: ['Custom API access', 'Large-scale data integration', 'Dedicated support', 'On-chain analytics'],
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
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
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 font-poppins">Flexible Pricing for Everyone</h2>
          <p className="text-lg text-light-slate">
            Choose the plan that fits your needs. Start for free and upgrade anytime.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative bg-slate-blue p-8 rounded-lg border border-slate-700 h-full flex flex-col ${plan.isPopular ? 'border-2 border-neon-purple' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-neon-purple text-brand-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-brand-white mb-2">{plan.name}</h3>
              <p className="text-light-slate mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-brand-white">{plan.price}</span>
                <span className="text-light-slate ml-1">{plan.frequency}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-neon-purple mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-md font-semibold transition-colors ${plan.isPopular ? 'bg-neon-purple text-brand-white' : 'bg-dark-blue text-brand-white hover:bg-neon-purple'}`}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
