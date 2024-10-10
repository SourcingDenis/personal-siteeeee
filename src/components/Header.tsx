import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    setIsDarkMode(darkModePreference === 'true');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 py-4 backdrop-blur-md z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">Denys</Link>
        <nav className="hidden lg:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Home</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Blog</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDarkMode ? <Sun className="w-5 h-5 text-gray-800 dark:text-white" /> : <Moon className="w-5 h-5 text-gray-800 dark:text-white" />}
          </button>
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-white" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" onClick={toggleMenu}>Home</Link>
            <Link to="/blog" className="block py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" onClick={toggleMenu}>Blog</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;