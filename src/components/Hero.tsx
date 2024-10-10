import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Denys Dinkevych</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Talent Acquisition Specialist</p>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Experienced in sourcing, recruitment, and talent management across various industries.
          Passionate about connecting top talent with innovative companies.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:d.dinkevych@playson.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </a>
          <a href="https://www.linkedin.com/in/sourcingdenis" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;