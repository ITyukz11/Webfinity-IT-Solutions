import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <div id='contact' className={`transition-all duration-500 px-12 sm:px-20 md:px-32 xl:px-56 ${isDarkMode ? 'bg-dark text-white ' : 'bg-alternative-white text-black'}
    w-full min-h-min z-40 flex flex-col gap-10 justify-center items-center py-8 overflow-hidden`}>
      <div className="text-center py-12 w-full">
        <h1 className="text-4xl font-bold font-mono mb-3 text-blue-500">Contact Us!</h1>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        {/* Your team members section goes here */}
      </div>
      <div className='flex flex-row flex-wrap gap-10 w-full justify-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 transition-colors delay-500 rounded-xl shadow-md w-full max-w-md h-full border-3 ${isDarkMode ? '#222' : '#fff'}`}
        >
          <h2 className="text-3xl font-bold mb-4 transition-colors duration-500" style={{ color: isDarkMode ? '#fff' : '#333' }}>Email Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium transition-colors duration-500" style={{ color: isDarkMode ? '#fff' : '#333' }}>Name:</label>
              <input type="text" id="name" name="name" className={`input-field border-2 w-full rounded-md transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} required />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium  transition-colors duration-500" style={{ color: isDarkMode ? '#fff' : '#333' }}>Email:</label>
              <input type="email" id="email" name="email" className={`input-field border-2 w-full rounded-md transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} required />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium transition-colors duration-500" style={{ color: isDarkMode ? '#fff' : '#333' }}>Message:</label>
              <textarea id="message" name="message" rows={4} className={`input-field border-2 w-full rounded-md transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center rounded-full px-4 py-2 transition-colors duration-500 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}
            >
              <FaPaperPlane className="mr-2" />
              Submit
            </motion.button>
          </form>
        </motion.div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.1741917934867!2d125.60790125736153!3d7.06483479853358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d78e8fe1f37%3A0x3652f55a2adc463e!2sCity%20Hall%20Dr%2C%20Poblacion%20District%2C%20Davao%20City%2C%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1708418323711!5m2!1sen!2sph"
          width="600" height="450" className='rounded-md' loading="lazy"></iframe>
      </div>

    </div>

  );
};

export default Contact;
