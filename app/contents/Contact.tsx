import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Contact: React.FC = () => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <div id='contact' className={`transition-all duration-500 ${isDarkMode ? 'bg-black text-white ' : 'bg-white text-black'} 
    w-full min-h-min z-40 flex flex-col justify-center items-center py-8`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-lg shadow-md w-full max-w-md"
        style={{ backgroundColor: isDarkMode ? '#222' : '#fff' }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#fff' : '#333' }}>Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium" style={{ color: isDarkMode ? '#fff' : '#333' }}>Name:</label>
            <input type="text" id="name" name="name" className="input-field" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium" style={{ color: isDarkMode ? '#fff' : '#333' }}>Email:</label>
            <input type="email" id="email" name="email" className="input-field" required />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium" style={{ color: isDarkMode ? '#fff' : '#333' }}>Message:</label>
            <textarea id="message" name="message" rows={4} className="input-field" required></textarea>
          </div>
          <button type="submit" className={`btn ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}>Submit</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
