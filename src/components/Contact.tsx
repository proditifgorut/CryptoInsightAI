import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const formVariants = {
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
    <section id="contact" className="py-20 sm:py-32 bg-dark-blue/50">
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 font-poppins">Get in Touch</h2>
          <p className="text-lg text-light-slate">
            Have questions or want to learn more? Drop us a line.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full bg-slate-blue border border-slate-700 rounded-md p-3 text-brand-white focus:ring-2 focus:ring-neon-purple focus:outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-slate-blue border border-slate-700 rounded-md p-3 text-brand-white focus:ring-2 focus:ring-neon-purple focus:outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full bg-slate-blue border border-slate-700 rounded-md p-3 text-brand-white focus:ring-2 focus:ring-neon-purple focus:outline-none transition"
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-neon-purple text-brand-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>
            </div>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-light-slate hover:text-neon-purple transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-light-slate hover:text-neon-purple transition-colors"><Twitter size={24} /></a>
            <a href="#" className="text-light-slate hover:text-neon-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.12 4.57A10 10 0 0 0 12 2C6.42 2 2 6.56 2 12.24c0 2.8.98 5.38 2.6 7.38l-1.4 4.82 5.1-1.42A10.13 10.13 0 0 0 12 22.24c5.58 0 10-4.56 10-10.24a10.43 10.43 0 0 0-1.2-4.85Z"/><path d="M8.1 12.7a2.3 2.3 0 0 1 0-4.6 2.3 2.3 0 0 1 2.3 2.3 2.29 2.29 0 0 1-2.3 2.3Z"/><path d="M15.9 12.7a2.3 2.3 0 0 1 0-4.6 2.3 2.3 0 0 1 2.3 2.3 2.29 2.29 0 0 1-2.3 2.3Z"/></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
