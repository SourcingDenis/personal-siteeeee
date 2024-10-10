import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <img src="https://i.ibb.co/NZtkftb/photo-2024-08-30-07-17-30.jpg" alt="Denys" className="w-24 h-24 rounded-full mb-2 object-cover" />
            <p>Denys</p>
            <p className="text-sm text-gray-400">Talent Sourcing Enthusiast</p>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Archive</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          © 2024 All things Talent and Sourcing w/Denys
        </div>
      </div>
    </footer>
  );
};

export default Footer;